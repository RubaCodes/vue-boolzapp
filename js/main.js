import { contacts } from './contacts.js';

const app = new Vue({
  el: '#app',
  data: {
    contacts,
    currentChat: 0,
  },
  methods: {
    chatSelect(index) {
      this.currentChat = index;
    },
  },
  computed: {
    // fixAvatar() {
    //   return (this.avatar = `img/avatar${this.contacts.avatar}.jpg`);
    // },
  },
});
