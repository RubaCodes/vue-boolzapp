import { contacts } from './contacts.js';

const app = new Vue({
  el: '#app',
  data: {
    contacts,
    currentChat: 0,
    newTextMessage: '',
  },
  methods: {
    chatSelect(index) {
      this.currentChat = index;
    },
    sendMessage(index) {
      console.log(this.newTextMessage, index, this.contacts[index]);
      this.contacts[index].messages.push({
        date: '10/01/2020 15:30:55',
        message: this.newTextMessage,
        status: 'sent',
      });
      this.newTextMessage = '';
    },
  },
  computed: {
    filteredDate() {
      //filtraggio data
    },
    filteredHours() {
      //filtraggio Ore
    },
    filteredName() {
      //filtraggio nomi
    },
  },
});

// da fare:
// -fix avatar
// -filtraggio chatSelect
// -filtraggio date/giorno

// -cazzatine
