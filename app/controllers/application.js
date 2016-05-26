import Ember from 'ember';

export default Ember.Controller.extend({
  updatePlayers: true,

  selectPlayer(players) {
    let numPlayers = players.get("length");
    return players[Math.floor(Math.random() * numPlayers)];
  },

  allPlayers: Ember.computed("model.players", function() {
    return this.get("model.players").toArray();
  }),

  unchosenPlayers: Ember.computed("model.players", "player1.id", function() {
    return this.get("model.players").filter((player) => {
      return player.id !== this.get("player1.id");
    });
  }),

  player1: Ember.computed("model.players.[]", function() {
    return this.selectPlayer(this.get("allPlayers"));
  }),

  player2: Ember.computed("model.players.[]", "unchosenPlayers", function() {
    return this.selectPlayer(this.get("unchosenPlayers"));
  }),

  actions: {
    startNewGame() {
      this.set("player1", this.selectPlayer(this.get("allPlayers")));
      this.set("player2", this.selectPlayer(this.get("unchosenPlayers")));
    }
  }
});
