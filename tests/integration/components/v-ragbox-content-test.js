import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('v-ragbox-content', 'Integration | Component | v ragbox content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{v-ragbox-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#v-ragbox-content}}
      template block text
    {{/v-ragbox-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
