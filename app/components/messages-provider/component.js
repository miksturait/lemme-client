import Component from '@ember/component';
import openSocket from 'socket.io-client';
import { A }  from '@ember/array';

export default Component.extend({
  socket: null,
  messages: null,

  didInsertElement() {
    this._super(...arguments);

    this.set('messages', A());

    const socket = openSocket('http://192.168.1.173:3001');

    socket.on('message', (content) => {
      this.get('messages').pushObject(content);
    });
    this.set('socket', socket);
  },

  actions: {
    sendMessage(payload) {
      this.get('socket').emit('message', payload);
    }
  }
});
