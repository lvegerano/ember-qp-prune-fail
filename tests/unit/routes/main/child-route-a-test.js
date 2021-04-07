import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/child-route-a', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/child-route-a');
    assert.ok(route);
  });
});
