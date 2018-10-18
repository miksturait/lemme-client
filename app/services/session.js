import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Service.extend({
  nickname: null,

  router: service(),

  isAuthenticated: computed('nickname', function(){
    return Boolean(this.nickname);
  }),

  authenticate(nickname) {
    this.set('nickname', nickname);
    this.router.transitionTo('dashboard');
  },

  signOut() {
    this.set('nickname', null);
  }
});
