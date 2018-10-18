import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  session: service(),

  actions: {
    signIn() {
      const nickname = this.nickname;
      this.session.authenticate(nickname);
    }
  }
});
