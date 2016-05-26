import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it can select a random player from provided array using selectPlayer', function(assert) {
  assert.expect(1);
  let controller = this.subject();

  let players = [{
    id: 1
  }, {
    id: 2
  }];

  let player = controller.selectPlayer(players);
  assert.ok(players.mapBy("id").contains(player.id));
});

test('it can filter out player1.id from the list of players', function(assert) {
  assert.expect(2);
  let controller = this.subject();
  let players = [{
    id: 1
  }, {
    id: 2
  }];

  controller.set("model", {
    players: players
  });
  controller.set("player1", {
    id: 1,
  });

  assert.equal(controller.get("unchosenPlayers.length"), 1);
  assert.equal(controller.get("unchosenPlayers")[0].id, 2);
});

test('it will set player1 and player 2 when startNewGame action is fired', function(assert) {
  assert.expect(4);
  let controller = this.subject();

  controller.selectPlayer = function() {
    assert.ok(true);
    
    return "player";
  };
  controller.set("allPlayers", []);
  controller.set("unchosenPlayers", []);

  controller.set("player1", "");
  controller.set("player2", "");

  controller.send("startNewGame");

  assert.equal(controller.get("player1"), "player");
  assert.equal(controller.get("player2"), "player");
});
