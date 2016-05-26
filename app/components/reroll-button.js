import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    clickReroll() {
      this.sendAction();
    }
  }
});
