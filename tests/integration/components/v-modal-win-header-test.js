import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-modal-win-header', 'Integration | Component | v modal win header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-modal-win-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-modal-win-header}}
      template block text
    {{/v-modal-win-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
