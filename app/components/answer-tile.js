import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['voteCount:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),

  updateAnswerFrom: false,
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
