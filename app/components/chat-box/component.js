import Component from '@ember/component';
import { computed }  from '@ember/object';

export default Component.extend({
  messagesChanged: computed('messages.length', function() {
    this._scrollToLastMessage();
  }),

  didRender() {
    this._super(...arguments);

    this.get('messagesChanged');
  },
  
  _scrollToLastMessage() {
    this.element.querySelector("#chat-box__last-message").scrollIntoView();
  }
});