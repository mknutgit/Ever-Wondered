import Ember from 'ember';

export default Ember.Component.extend({
  
  sortBy: ['answers.count:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

  actions: {
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
