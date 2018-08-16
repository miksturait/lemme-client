import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('tables', []);
  },

  actions: {
    addTable() {
      const newTable = { seatsCount: 2 };
      this.tables.pushObject(newTable);
    }
  }
});
