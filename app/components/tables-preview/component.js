import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { range } from 'lodash';
import { filterBy } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);

    this.set('seatsCount', 2);
  },

  filteredTables: filterBy('tables', 'isDeleted', false),

  actions: {
    addTable() {
     const table = this.get('store')
        .createRecord('table', {name: '1'})

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
      Promise.all(table.get('seats').map((seat) => seat.destroyRecord()))
        .then(() => {
          table.destroyRecord();
        })
    },

    showForm() {
      this.set('showAddTableForm', true);
    }
  }
});
