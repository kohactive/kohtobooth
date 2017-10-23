import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  images: service(),

  model() {
    // var newPost = this.store.createRecord('image', {
    //   title: 'EmberFire is flaming hot!',
    //   body: 'You can store and sync data in realtime without a backend.'
    // });
    // newPost.save();

    // return this.get('images').filenames();
    return this.store.findAll('image');
  },

  actions: {
    showImage(image) {
      this.transitionTo('index.image', image.get('id'));
    }
  }
});
