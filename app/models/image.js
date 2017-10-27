import DS from 'ember-data';

export default DS.Model.extend({
  direct_media_link : DS.attr('string'),
  share_link        : DS.attr('string'),
  file              : DS.attr('string'),
  downloadUrl       : DS.attr('string'),
  embedLink         : DS.attr('string'),
  webContentLink    : DS.attr('string'),

  url: Ember.computed('downloadUrl', function() {
    if(this.get('downloadUrl')){
      return this.get('downloadUrl').split('&e')[0];
    }
  })
});
