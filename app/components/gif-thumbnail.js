import Component from '@ember/component';

export default Component.extend({
  classNames        : ['gif col-sm-collapse-4 col-lg-collapse-3'],
  classNameBindings : ['image.id'],

  didRender(){
    this._super(...arguments);
    $(`.${this.get('image.id')} img`).freezeframe();
  },

  click() {
    this.sendAction('action', this.get('image'));
  }
});
