import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | chat-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(6);

    this.set('messages', ['test', 'test2']);

    await render(hbs`{{chat-box messages=messages}}`);

    assert.dom('h1').hasText('CHAT', 'it should print header with chat');
    assert.dom('ul li:first-child').hasText('test');
    assert.dom('ul li:last-child').hasText('test2');
    assert.equal(this.element.querySelectorAll('li').length, 2);

    this.set('messages', ['bla bla']);

    assert.dom('ul li:first-child').hasText('bla bla');
    assert.equal(this.element.querySelectorAll('li').length, 1);
  });
});
