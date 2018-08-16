import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['seat'],
  active: false,
  ready: false,

  classNameBindings: ['cssClass'],

  cssClass: computed('active', 'ready', function() {
    if (this.ready) {
      return 'ready';
    }

    if (this.active) {
      return 'active';
    }
    
  }),

  click(event) {
    if (event.target.tagName === 'I') {
      return this._leaveSeat();
    }

    if (this.active) {
      this.toggleProperty('ready');
    } else {
      this.set('active', true);
      this.set('displayCloseButton', true);
    }
  },

  mouseEnter() {
    if (this.active) {
      this.set('displayCloseButton', true);
    }
  },

  mouseLeave() {
    this.set('displayCloseButton', false);
  },

  _leaveSeat() {
    this.set('active', false);
    this.set('ready', false);
    this.set('displayCloseButton', false);
  }
});
