import { contacts } from './contacts.js';

const app = new Vue({
  el: '#app',
  data: {
    contacts,
  },
  methods: {
    //metodi
  },
  computed: {
    // fixAvatar() {
    //   return (this.avatar = `img/avatar${this.contacts.avatar}.jpg`);
    // },
  },
});
