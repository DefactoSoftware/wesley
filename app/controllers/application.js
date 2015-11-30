import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  i18n: Ember.inject.service(),
  currentLocale: Ember.computed.readOnly('i18n.locale'),
});

export default ApplicationController;
