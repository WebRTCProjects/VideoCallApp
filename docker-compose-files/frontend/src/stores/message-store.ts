import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    username: '',
    content: [''],
    userNameColor:<{username:string, color:string}>{}
  }),
  getters: {
    getUsername: (state) => state.username,
    getContent: (state) => state.content,
    getUserNameColor: (state) => (username:string)=> {return state.userNameColor[username]},
  },
  actions: {
    addToContent(message: string) {
      this.content.push('<p>' + message + '</p>');
    },
    addUserNameColor(username:string, color:string){
      this.userNameColor[username] = color
    }
  },
});
