import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);

    this.set('seatsCount', 2);
  },

  actions: {
    addTable() {
      const newTable = { seatsCount: this.seatsCount };
      this.get('store')
        .createRecord('table', newTable)
        .save();

      this.set('seatsCount', 2);
      this.set('showAddTableForm', false);
    },

    showForm() {
      this.set('showAddTableForm', true);
    }
  }
});
