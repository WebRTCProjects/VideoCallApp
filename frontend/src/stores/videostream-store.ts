import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVideoStore = defineStore('video', {
  state: () => ({
    video: ref(),
    signal: '',
    caller: '',
    connection: ref(),
    remoteVideo: ref(),
  }),
  getters: {
    getVideo: (state) => state.video,
    getSignal: (state) => state.signal,
    getConnection: (state) => state.connection,
    getRemoteVideo: (state) => state.remoteVideo,
    getCaller: (state) => state.caller,
  },
  actions: {
    setVideo(currStream: MediaStream) {
      this.video = currStream;
    },
    setSignal(signal: any) {
      this.signal = signal;
    },
    setConnection(connection: any) {
      this.connection = connection;
    },
    setRmodeVideo(video: any) {
      this.remoteVideo = video;
    },
    setCaller(caller: string) {
      this.caller = caller;
    },
  },
});
