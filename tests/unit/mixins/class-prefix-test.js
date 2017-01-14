import Ember from 'ember';
import ClassPrefixMixin from 'vishu-components/mixins/class-prefix';
import { module, test } from 'qunit';

module('Unit | Mixin | class prefix');

// Replace this with your real tests.
test('it works', function(assert) {
  let ClassPrefixObject = Ember.Object.extend(ClassPrefixMixin);
  let subject = ClassPrefixObject.create();
  assert.ok(subject);
});
