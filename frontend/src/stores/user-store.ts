import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: Array<string>(),
  }),
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    setUsers(users: Array<string>) {
      this.users = users;
    },
  },
});
