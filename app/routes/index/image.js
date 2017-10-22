import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  images: service(),

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
