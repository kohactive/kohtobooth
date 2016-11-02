import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    let filenames = [];
    for (var i = 1; i <= 105; i++) {
      filenames.push('SB-QppknN-000' + pad(i, 3));
    }
    return filenames;
  },

  actions: {
    showImage(image) {
      this.transitionTo('index.image', image);
    }
  }
});
