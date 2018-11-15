import Component from '@ember/component';
import { inject as service } from '@ember/service';
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
      this.get('store').createRecord('table', {name: '1', seatsCount: this.seatsCount}).save();
    },

    removeTable(table) {
      table.destroyRecord();
    },

    showForm() {
      this.set('showAddTableForm', true);
    }
  }
});
