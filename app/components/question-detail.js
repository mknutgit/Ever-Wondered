import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        notes: this.get('notes')
    };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
