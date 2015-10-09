import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    didTransition: function() {
      if (window.Cookies.get('welcome-modal') !== 'hide') {
        window.setTimeout(
          function () {
            this.send('openModal', 'welcome-modal');
          }.bind(this), 2000);
      }
    }
  }
});
