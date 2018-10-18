import Component from '@ember/component';
import openSocket from 'socket.io-client';
import { A } from '@ember/array';
import ENV from 'lemme-client/config/environment';

export default Component.extend({
  socket: null,
  messages: null,

  didInsertElement() {
    this._super(...arguments);

    this.set('messages', A());

    const socket = openSocket(ENV.socketURI);

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
