import Ember from 'ember';

export default Ember.Route.extend({
  images: Ember.inject.service(),

  beforeModel(transition) {
    if( this.get('images').notInFilenames(transition.params['index.image'].image) ) {
      this.transitionTo('index');
    }
  },

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
