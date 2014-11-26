import Ember from 'ember';

export default Ember.Controller.extend({
  showDialog: false,

  actions: {
    popup: function() {
      this.set('showDialog', true);
    },

    opened: function() {
      console.log('opened?');
    },

    switch: function() {
      var selected = this.get('model.selected');

      if (selected) {
        this.set('model.selected', 0);
      } else {
        this.set('model.selected', 1);
      }
    }
  }
});
