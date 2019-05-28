import EmberObject from '@ember/object';
import ButtonMixin from '@gavant/ember-button-basic/mixins/button';
import { module, test } from 'qunit';

module('Unit | Mixin | button', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ButtonObject = EmberObject.extend(ButtonMixin);
    let subject = ButtonObject.create();
    assert.ok(subject);
  });
});
