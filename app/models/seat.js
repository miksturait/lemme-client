import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('boolean'),

  table: DS.belongsTo('table')
});
