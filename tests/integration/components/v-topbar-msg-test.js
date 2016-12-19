import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-topbar-msg', 'Integration | Component | v topbar msg', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-topbar-msg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-topbar-msg}}
      template block text
    {{/v-topbar-msg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
