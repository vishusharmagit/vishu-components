import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-modal-win-footer', 'Integration | Component | v modal win footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-modal-win-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-modal-win-footer}}
      template block text
    {{/v-modal-win-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
