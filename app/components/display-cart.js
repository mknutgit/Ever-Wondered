import Ember from 'ember';

export default Ember.Component.extend({

  totalQuestions: Ember.computed('questionCart.questions.[]', function() {
    return this.get('questionCart.questions.length');
  }),

  questionCart: Ember.inject.service(),

  actions: {
    removeFromCart(item) {
      this.get('questionCart').remove(item);
    }
  }

});
