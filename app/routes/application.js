import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),
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
    closeWelcome: function() {
      window.Cookies.set('welcome-modal', 'hide', { expires: 14 });
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    changeLocaleEn: function() {
      this.get('i18n').set('locale', 'en');
    },
    changeLocaleNl: function() {
      this.get('i18n').set('locale', 'nl');
    }
  }
});
