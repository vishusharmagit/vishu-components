import Ember from 'ember';
import VComponentInputIdMixin from 'vishu-components/mixins/v-component-input-id';
import { module, test } from 'qunit';

module('Unit | Mixin | v component input id');

// Replace this with your real tests.
test('it works', function(assert) {
  let VComponentInputIdObject = Ember.Object.extend(VComponentInputIdMixin);
  let subject = VComponentInputIdObject.create();
  assert.ok(subject);
});
