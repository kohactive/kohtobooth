import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  images: service(),

  model() {
    return this.get('images').filenames();
  },

  actions: {
    showImage(image) {
      this.transitionTo('index.image', image);
    }
  }
});
