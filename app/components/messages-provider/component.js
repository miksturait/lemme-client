import Component from '@ember/component';
import openSocket from 'socket.io-client';
import { A } from '@ember/array';
import ENV from 'lemme-client/config/environment';
import { inject as service } from '@ember/service';

export default Component.extend({
  socket: null,
  messages: null,
  session: service(),

  didInsertElement() {
    this._super(...arguments);

    this.set('messages', A());

    const socket = openSocket(ENV.socketURI);

    socket.on('message', (content) => {
      const { userName, payload } = content;

      this.get('messages').pushObject({
        fromOther: this._messageOrigin(userName),
        userName,
        payload
      });
    });
    this.set('socket', socket);
  },

  _messageOrigin(author){
    return this.session.nickname !== author;
  },

  actions: {
    sendMessage(payload) {
      this.get('socket').emit('message', payload);
    }
  }
});
