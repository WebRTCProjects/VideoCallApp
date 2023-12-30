// import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client/dist/sockjs';
import { useMessageStore } from './stores/message-store';
import { useVideoStore } from './stores/videostream-store';
import { EventBus } from 'quasar';
import { ref } from 'vue';
import { getRemoteVideo } from 'src/PeerConnection';
import { useUsersStore } from './stores/user-store';

const store = useMessageStore();
const URL = process.env.API + '/ws';
const connectionRef = ref();
const streamStore = useVideoStore();
const users = useUsersStore();

export const bus = new EventBus();

const header = {};
const colors = [
  '#2196F3',
  '#32c787',
  '#00BCD4',
  '#ff5652',
  '#ffc107',
  '#ff85af',
  '#FF9800',
  '#39bbb0',
];

let stompCLient: Stomp.client;

let connectionStatus = false;

export const initSocket = () => {
  return con();
};

export const con = () => {
  const socket = new SockJS(URL);
  stompCLient = Stomp.over(socket);
  // stompCLient.debug = null;

  const header = {};

  stompCLient.connect(
    header,
    () => {
      connectionStatus = true;
      stompCLient.subscribe('/topic/public', onMessageRecieved, header);
    },
    (err: any) => {
      console.log('error is=>', err);
    }
  );
  return stompCLient;
};

export const close = () => {
  if (stompCLient) {
    stompCLient.disconnect(() => {
      connectionStatus = false;
    });
  }
};

export const send = (username: string, message: string) => {
  const chatMessage = {
    sender: username,
    content: message,
    type: 'CHAT',
  };
  if (connectionStatus) {
    try {
      stompCLient.send(
        '/app/chat.sendMessage',
        header,
        JSON.stringify(chatMessage)
      );
    } catch (error) {
      con();
    }
  }
};

export const enterToChat = (username: string) => {
  if (connectionStatus) {
    try {
      stompCLient.send(
        '/app/chat.addUser',
        header,
        JSON.stringify({ sender: username, type: 'JOIN' })
      );
    } catch (error) {
      con();
    }
  }
  return connectionStatus;
};
function getAvatarColor(messageSender: string) {
  let hash = 0;
  for (let i = 0; i < messageSender.length; i++) {
    hash = 31 * hash + messageSender.charCodeAt(i);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
}

function onMessageRecieved(payload: any) {
  const message = JSON.parse(payload.body);
  const sender = message.sender;
  const content = message.content;
  if (message.type === 'JOIN') {
    bus.emit('refresh-users');
    let html = '<li class="row justify-center">';
    html = html + sender + ' joined to chat!';
    html += '</li>';
    store.addToContent(html);
    store.addUserNameColor(sender, getAvatarColor(sender));
    bus.emit('scroll');
  } else if (message.type === 'LEAVE') {
    bus.emit('refresh-users');
    let html = '<li class="row justify-center">';
    html = html + sender + ' left chat!';
    html += '</li>';
    store.addToContent(html);
    bus.emit('scroll');
  } else if (message.type === 'VIDEOCALL') {
    console.log('Video call', message);
    if (message.from != store.getUsername) {
      store.setSomeOneCalling(true);
      streamStore.setSignal(message.signal);
      streamStore.setCaller(message.sender);
    }
  } else {
    let html = '';
    if (sender == store.getUsername)
      html = '<li class="row justify-end"> <div>';
    else {
      const color = store.getUserNameColor(sender) ?? 'red';
      html =
        '<li class="row justify-start">' +
        `<span class="avatar" style="background-color:${color}">` +
        sender[0] +
        '</span>' +
        '<div>' +
        '<span class="sender-name">' +
        sender +
        '</span>';
    }

    html += '<span class="message-content">' + content + '</span>' + '</div>';
    html += '</li>';
    store.addToContent(html);
    bus.emit('scroll');
  }
}
export const videoCall = (signal: any, sender: any, from: string) => {
  const callMessage = {
    signal: signal,
    sender: sender,
    from: from,
    type: 'VIDEOCALL',
  };

  if (connectionStatus) {
    try {
      stompCLient.send(
        '/app/chat.videoCall',
        header,
        JSON.stringify(callMessage)
      );
    } catch (error) {
      con();
    }
  }
};
