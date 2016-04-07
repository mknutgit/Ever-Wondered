import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    forgetIt () {
      this.transitionTo('index');
    },
    addQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      console.log(newQuestion);
      this.transitionTo('index');
    }
  }
});
