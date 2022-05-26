import { contacts } from './contacts.js';

let dt = luxon.DateTime;
//console.log(dt);

const app = new Vue({
  el: '#app',
  data: {
    contacts,
    currentChat: 0,
    processingDelete: false,
    newTextMessage: '',
    searchChat: '',
  },
  methods: {
    //funz che aggiunge l'indice ai message
    filteredMessages() {
      return this.contacts.forEach((element) => {
        element.messages = element.messages.map((obj) => ({
          ...obj,
          index: element.messages.indexOf(obj),
        }));
      });
    },
    //funzione selezione chat
    chatSelect(index) {
      this.currentChat = this.filteredName[index].index;
    },
    //funz per send message e check
    sendMessage(index) {
      this.contacts[index].messages.push({
        date: dt.now().toFormat('dd/MM/yyyy HH:mm:ss'),
        message: this.newTextMessage,
        status: 'sent',
      });
      this.newTextMessage = '';
      this.messagecheck(this.contacts[index]);
    },
    messagecheck(contact) {
      setTimeout(() => {
        contact.messages.push({
          date: dt.now().toFormat('dd/MM/yyyy HH:mm:ss'),
          message: 'Messaggio Ricevuto',
          status: 'received',
        });
      }, 1000);
    },
    //luxon per orari
    getTime(message) {
      return dt //se la mettessi in computed?
        .fromFormat(message.date, 'dd/MM/yyyy HH:mm:ss')
        .toFormat('HH:mm');
    },
    //Dialog e funzione cancella messaggi
    clickToDialog(message, index) {
      if (index == message.index) {
        console.log(index, message.index);
        this.processingDelete = !this.processingDelete;
      }
    },
    deleteMessage(index) {
      this.contacts[this.currentChat].messages.splice(index, 1);
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
  created() {
    this.filteredMessages();
  },
});

// da fare:

// -cazzatine
