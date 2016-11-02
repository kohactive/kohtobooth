import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gif col-sm-collapse-4 col-lg-collapse-3'],

  click() {
    this.sendAction('action', this.get('image'));
  }
});
