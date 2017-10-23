import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  images: service(),

  beforeModel(transition) {
    // if( this.get('images').notInFilenames(transition.params['index.image'].image) ) {
    //   this.transitionTo('index');
    // }
  },

  model(params) {
    return this.store.findRecord('image', params.image);
  },

  actions: {
    close() {
      this.transitionTo('index');
    }
  }
});
