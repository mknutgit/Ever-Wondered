import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    forgetIt() {
      this.set('addNewQuestion', false);
    },
    addQuestion() {
      var params = {
        ask: this.get('ask') ? this.get('ask'): "",
        author: this.get('author') ? this.get('author'): "",
        notes: this.get('notes') ? this.get('notes'): ""
      };
      this.set('addNewQuestion', false);
      this.set('ask', '');
      this.set('author', '');
      this.set('notes', '');
      this.sendAction('addQuestion', params);
    }
  }
});
