import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    username: '',
    content: [''],
    userNameColor: <{ username: string; color: string }>{},
    someoneCalling: false,
    connectionStatus: false,
  }),
  getters: {
    getUsername: (state) => state.username,
    getContent: (state) => state.content,
    getUserNameColor: (state) => (username: string) => {
      return state.userNameColor[username];
    },
    getSomeOneCalling: (state) => state.someoneCalling,
    getConnectionStatus: (state) => state.connectionStatus,
  },
  actions: {
    addToContent(message: string) {
      this.content.push('<p>' + message + '</p>');
    },
    addUserNameColor(username: string, color: string) {
      this.userNameColor[username] = color;
    },
    setSomeOneCalling(status: boolean) {
      this.someoneCalling = status;
    },
    setConnectionStatus(status: boolean) {
      this.connectionStatus = status;
    },
  },
});
