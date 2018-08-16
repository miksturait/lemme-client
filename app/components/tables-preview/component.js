import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('tables', []);
    this.set('seatsCount', 2);
  },

  actions: {
    addTable() {
      const newTable = { seatsCount: this.seatsCount };
      this.tables.pushObject(newTable);

      this.set('seatsCount', 2);
      this.set('showAddTableForm', false);
    },

    showForm() {
      this.set('showAddTableForm', true);
    }
  }
});
