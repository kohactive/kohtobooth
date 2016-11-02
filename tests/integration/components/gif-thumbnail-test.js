import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gif-thumbnail', 'Integration | Component | gif thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gif-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gif-thumbnail}}
      template block text
    {{/gif-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
