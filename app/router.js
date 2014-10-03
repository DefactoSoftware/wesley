import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.resource('outcomes', { path: '/outcomes' }, function () {
    this.route('new');
    this.route('index');
  });

  this.resource('outcome', { path: '/outcomes/:outcome_id' }, function () { } );
});

export default Router;
