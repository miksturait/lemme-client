import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    if (this.session.isAuthenticated) {
      this._super(...arguments);
    } else {
      this.transitionTo('login');
    }
  }
});
