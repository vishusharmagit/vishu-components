import Ember from 'ember';
import VTooltipEnabledMixin from 'vishu-components/mixins/v-tooltip-enabled';
import { module, test } from 'qunit';

module('Unit | Mixin | v tooltip enabled');

// Replace this with your real tests.
test('it works', function(assert) {
  let VTooltipEnabledObject = Ember.Object.extend(VTooltipEnabledMixin);
  let subject = VTooltipEnabledObject.create();
  assert.ok(subject);
});
