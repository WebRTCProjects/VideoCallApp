<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="main-area">
      <div>
        <p class="welcome-title">Welcome to my chat app</p>
        <q-form @submit.prevent="connectToChat">
          <div class="input-label">Username</div>
          <q-input outlined v-model="username" class="first-input"></q-input>
          <div class="row justify-end">
            <q-btn class="enter-button" @click="connectToChat">
              Enter to Chat
            </q-btn>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { initSocket, enterToChat, send } from 'src/socket';
import { useMessageStore } from 'src/stores/message-store';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const store = useMessageStore();
const username = ref('');
const connected = ref(false);
const $q = useQuasar();
const router = useRouter();

function connectToChat() {
  if (username.value == '') {
    $q.notify({
      message: 'Username cannot be empty!',
      color: 'negative',
    });
    return;
  }
  store.username = username.value;
  connected.value = enterToChat(username.value);
  username.value = '';
  router.push('/chat');
}

onMounted(() => {
  initSocket();
});
</script>
