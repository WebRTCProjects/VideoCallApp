<template>
  <q-page class="row items-center justify-evenly">
    <span>{{ store.getUsername }}</span>
    <div class="full-width row items-center justify-evenly">
      <video
        width="320"
        height="240"
        ref="myVideo"
        autoplay
        playsinline
      ></video>
      <q-btn
        v-if="store.getSomeOneCalling"
        color="secondary"
        @click="answerCall()"
      >
        Answer-call
      </q-btn>
      <video
        width="320"
        height="240"
        ref="userVideo"
        autoplay
        playsinline
      ></video>
    </div>
    <div v-for="user in users.getUsers" :key="user">
      <q-btn
        v-if="store.getUsername != user"
        color="primary"
        no-caps
        @click="callUser(user, stream, store.getUsername)"
        >Call - {{ user }}</q-btn
      >
    </div>
  </q-page>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useMessageStore } from 'src/stores/message-store';
import { useVideoStore } from 'src/stores/videostream-store';
import { videoCall } from 'src/socket';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client/dist/sockjs';
import axios from 'axios';
import { useUsersStore } from 'src/stores/user-store';
import { con, bus } from 'src/socket';

const stream = ref();
const myVideo = ref();
const userVideo = ref();
const store = useMessageStore();
const videoStream = useVideoStore();
const URL = process.env.API + '/ws';
const users = useUsersStore();
let answerSocket;
onMounted(() => {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((currStream) => {
      stream.value = currStream;
      myVideo.value.srcObject = currStream;
      videoStream.setVideo = currStream;
    });
  getAllUsers();
  answerSocket = con();
  bus.on('refresh-users', () => {
    getAllUsers();
  });
});
const getAllUsers = () => {
  axios.get(process.env.API + '/users').then((res) => {
    let item = store.getUsername;
    var index = res.data.indexOf(item);
    if (index !== -1) {
      res.data.splice(index, 1);
    }
    console.log(res.data);
    users.setUsers(res.data);
  });
};
const callUser = (username, stream, form) => {
  const socket = new SockJS(URL);
  let stompCLient = Stomp.over(socket);
  const peer = new SimplePeer({
    initiator: true,
    stream: stream,
    trickle: false,
  });
  peer.on('error', (err) => {
    console.error('Peer error:', err);
  });
  peer.on('signal', (data) => {
    console.log('Data is this=>', data);
    videoCall(data, username, form);
  });

  peer.on('stream', (currStream) => {
    console.log('in the stream peer');
    userVideo.value.srcObject = currStream;
  });

  videoStream.setConnection(peer);

  const header = {};

  stompCLient.connect(
    header,
    () => {
      stompCLient.subscribe(
        '/topic/answer',
        (payload) => {
          const message = JSON.parse(payload.body);
          console.log('sender=> ', message.sender);
          console.log('username=> ', store.getUsername);
          if (message.sender != store.getUsername) {
            peer.signal(message.signal);
            console.log('peer signal is sent');
          }
        },
        header
      );
    },
    (err) => {
      console.log('error is=>', err);
    }
  );
};
const answerCall = () => {
  console.log('inside get Remote function');
  const peer = new SimplePeer({
    initiator: false,
    stream: stream.value,
    trickle: false,
  });
  peer.on('error', (err) => {
    console.error('Peer error:', err);
  });
  peer.on('signal', (data) => {
    answer(data);
  });
  peer.signal(videoStream.getSignal);

  peer.on('stream', (currStream) => {
    console.log('in the stream peer');
    userVideo.value.srcObject = currStream;
  });
  videoStream.setConnection(peer);
};
function answer(signal) {
  const header = {};
  const callMessage = {
    signal: signal,
  };
  try {
    answerSocket.send(
      '/app/answer.videoCall',
      header,
      JSON.stringify(callMessage)
    );
  } catch (error) {
    console.log('Error in answer function', error);
  }
  store.setSomeOneCalling(false);
}
</script>
