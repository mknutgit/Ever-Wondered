import Ember from 'ember';

export default Ember.Component.extend({
  questionCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('questionCart').add(item);
    },
  }

});
