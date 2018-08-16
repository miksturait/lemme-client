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

  click() {
    if (this.active) {
      this.toggleProperty('ready');
    } else {
      this.set('active', true);
    }
  }
});
