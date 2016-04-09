import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    forgetIt() {
      this.set('addNewAnswer', false);
    },
    addAnswer() {
      var params = {
        answer: this.get('answer') ? this.get('answer'): "",
        author: this.get('author') ? this.get('author'): "",
        question: this.get('question') ? this.get('question'): ""
      };
      this.set('addNewAnswer', false);
      this.set('answer', '');
      this.set('author', '');
      this.sendAction('addAnswer', params);
    }
  }
});
