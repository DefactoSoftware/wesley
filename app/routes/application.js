import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    didTransition: function() {
      window.setTimeout(
        function () {
          this.send('openModal', 'welcome-modal');
        }.bind(this), 2000);
    }
  }
});
