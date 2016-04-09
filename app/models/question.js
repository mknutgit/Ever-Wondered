import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  //// means that if the related model data isn't already loaded, an additional request should be made to Firebase in order to retrieve it ////
  answers: DS.hasMany('answer', { async: true })
});
