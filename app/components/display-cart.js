import Ember from 'ember';

export default Ember.Component.extend({

  questionCart: Ember.inject.service(),
  totalQuestions: Ember.computed('questionCart.questions.[]', function() {
    return this.get('questionCart.questions.length');
  })
});
