import { contacts } from './contacts.js';

let dt = luxon.DateTime;
let format = luxon.DateTime.now().toLocaleString(luxon.DateTime.TIME_SIMPLE);
console.log(dt);

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
      this.contacts[index].messages.push({
        date: dt.now().toLocaleString(luxon.DateTime.TIME_SIMPLE),
        message: this.newTextMessage,
        status: 'sent',
      });
      this.newTextMessage = '';
      this.messagecheck(this.contacts[index]);
    },
    messagecheck(contact) {
      setTimeout(() => {
        contact.messages.push({
          date: dt.now().toISO(),
          message: 'Messaggio Ricevuto',
          status: 'received',
        });
      }, 1000);
    },
    getTime(message) {
      return dt //se la mettessi in computed?
        .fromFormat(message.date, 'dd/MM/yyyy HH:mm:ss')
        .toFormat('HH:mm');
    },
  },
  computed: {
    filteredDate() {
      return;
    },
    filteredName() {
      let filter = this.contacts.filter((e) =>
        e.name.toLowerCase().includes(this.searchChat)
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
