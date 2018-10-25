import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | dashboard', function(hooks) {
  setupApplicationTest(hooks);

  test('redirects unauthenticated user to /login page', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/login');
  });

  test('authenticated user can access /dashboard', async function(assert) {
    const session = this.owner.lookup('service:session');
    session.authenticate('coderDojoUser');

    await visit('/dashboard');

    assert.equal(currentURL(), '/dashboard');
  });
});
