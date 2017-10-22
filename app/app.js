import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  ready: function() {
    Ember.$(document).ready(function() {
      new freezeframe().freeze();
    });
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
