import Ember from 'ember';
import VInputBasedMixin from 'vishu-components/mixins/v-input-based';
import { module, test } from 'qunit';

module('Unit | Mixin | v input based');

// Replace this with your real tests.
test('it works', function(assert) {
  let VInputBasedObject = Ember.Object.extend(VInputBasedMixin);
  let subject = VInputBasedObject.create();
  assert.ok(subject);
});
