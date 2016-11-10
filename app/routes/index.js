import Ember from 'ember';

export default Ember.Route.extend({
  images: Ember.inject.service(),

  model() {
    return this.get('images').filenames();
  },

  actions: {
    showImage(image) {
      this.transitionTo('index.image', image);
    }
  }
});
