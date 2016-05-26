import { test } from 'qunit';
import moduleForAcceptance from 'rock-paper-scissors/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | game');

test('visiting /', function(assert) {
  server.createList("player", 2);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
