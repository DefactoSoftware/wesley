import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('video', { path: '/video' });
  this.route('instructions', { path: '/instructions' });
  this.route('resources', { path: '/resources' });
  this.route('contact', { path: '/contact' });
});

export default Router;
