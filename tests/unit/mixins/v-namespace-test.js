import Ember from 'ember';
import VNamespaceMixin from 'vishu-components/mixins/v-namespace';
import { module, test } from 'qunit';

module('Unit | Mixin | v namespace');

// Replace this with your real tests.
test('it works', function(assert) {
  let VNamespaceObject = Ember.Object.extend(VNamespaceMixin);
  let subject = VNamespaceObject.create();
  assert.ok(subject);
});
