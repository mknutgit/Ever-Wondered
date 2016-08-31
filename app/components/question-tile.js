import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers.[]', function() {
    return this.get('question.answers.length');
  }),

  questionCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('questionCart').add(item);
    },
  }

});
