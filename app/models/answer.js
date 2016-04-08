import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  likes: DS.hasMany('likes', {async: true}),
  question: DS.belongsTo('question', { async: true})
});
