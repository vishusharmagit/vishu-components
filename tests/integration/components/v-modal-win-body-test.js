import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-modal-win-body', 'Integration | Component | v modal win body', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-modal-win-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-modal-win-body}}
      template block text
    {{/v-modal-win-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
