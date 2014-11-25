import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      width: 300,
      name: 'Bob',
      selected: 0
    };
  }
});
