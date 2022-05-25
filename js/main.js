import { contacts } from './contacts.js';

const app = new Vue({
  el: '#app',
  data: {
    contacts,
    currentChat: 0,
    newTextMessage: '',
    searchChat: '',
  },
  methods: {
    chatSelect(index) {
      this.currentChat = this.filteredName[index].index;
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
      return;
    },
    filteredHours() {
      //filtraggio Ore
    },
    filteredName() {
      let filter = this.contacts.filter((e) =>
        e.name.toLowerCase().includes(this.searchChat)
      );
      console.log(
        filter.map((e) => ({ name: e.name, index: this.contacts.indexOf(e) }))
      );
      return filter.map((e) => ({
        name: e.name,
        active: e.active,
        avatar: e.avatar,
        messages: e.messages,
        index: this.contacts.indexOf(e),
      }));
    },
  },
});

// da fare:
// -filtraggio chatSelect
// -filtraggio date/giorno

// -cazzatine
