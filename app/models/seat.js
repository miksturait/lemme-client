import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('boolean'),
  ready: DS.attr('boolean'),

  table: DS.belongsTo('table')
});
