import Ember from 'ember';

var InstructionsController = Ember.Controller.extend({
  i18n: Ember.inject.service(),
  currentLocale: Ember.computed.readOnly('i18n.locale'),
  isNl: Ember.computed('currentLocale', function() {
    return this.get('currentLocale') === 'nl';
  })
});

export default InstructionsController;
