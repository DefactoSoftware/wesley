import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('opt', { path: '/opt' });
  this.route('option', { path: '/option'});
  this.route('video', { path: '/video' });
  this.route('instructions', { path: '/instructions' });
  this.route('prom', { path: '/prom'});
  this.route('option', { path: '/option'});
  this.route('resources', { path: '/resources' });
  this.route('contact', { path: '/contact' });
});

export default Router;
