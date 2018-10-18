import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  nickname: null,

  isAuthenticated: computed('nickname', function(){
    return Boolean(this.nickname);
  }),

  authenticate(nickname) {
    this.set('nickname', nickname);
  },

  signOut() {
    this.set('nickname', null);
  }
});
