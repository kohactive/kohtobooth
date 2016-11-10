import Ember from 'ember';

export default Ember.Service.extend({
  exclude: [1,2,7,71,96],

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  },

  filenames() {
    let filenames   = [];
    for (var i = 1; i <= 105; i++) {
      if ( this.get('exclude').indexOf(i) === -1 ) {
        filenames.push('SB-QppknN-000' + this.pad(i, 3));
      }
    }
    return filenames;
  },

  notInFilenames(filenameString) {
    return this.filenames().indexOf(filenameString) === -1;
  },
});
