import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('player-bio', 'Integration | Component | player bio', {
  integration: true
});

test('it renders the players name', function(assert) {
  let player = {
    name: "Lance Franklin",
  };
  this.set("player", player);

  this.render(hbs`{{player-bio player=player}}`);

  assert.equal(this.$(".player-bio .name").text().trim(), player.name);
});

test('it renders the players picture', function(assert) {
  let player = {
    profileImage: "/assets/default"
  };
  this.set("player", player);

  this.render(hbs`{{player-bio player=player}}`);

  assert.equal(this.$(".player-bio .profile-image img").attr("src"), player.profileImage);
});
