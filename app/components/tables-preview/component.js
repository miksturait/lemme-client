import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { range } from 'lodash';

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);

    this.set('seatsCount', 2);
  },

  actions: {
    addTable() {
      const table = this.get('store')
        .createRecord('table')

      const seatsPromises = range(this.seatsCount).map(() => {
        return this.get('store').createRecord('seat', {
          active: false,
          ready: false,
          table
        }).save();
      });

      Promise.all(seatsPromises)
        .then((seats) => {
          table.set('seats', seats);
          table.save();

          this.set('seatsCount', 2);
          this.set('showAddTableForm', false);
        });
    },

    removeTable(table) {
      table.get('seats').forEach(seat => seat.destroyRecord());
      table.destroyRecord();
    },

    showForm() {
      this.set('showAddTableForm', true);
    }
  }
});
