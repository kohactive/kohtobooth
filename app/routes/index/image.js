import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params.image;
  },

  setupController(controller, model) {
    controller.set('imgSrc', 'assets/images/gifs/' + model + '.gif');
  },

  actions: {
    close() {
      this.transitionTo('index');
    }
  }
});
