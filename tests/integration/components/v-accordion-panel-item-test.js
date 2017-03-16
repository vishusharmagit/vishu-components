import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-accordion-panel-item', 'Integration | Component | v accordion panel item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-accordion-panel-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-accordion-panel-item}}
      template block text
    {{/v-accordion-panel-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
