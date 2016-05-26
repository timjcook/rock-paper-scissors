import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reroll-button', 'Integration | Component | reroll button', {
  integration: true
});

test('it renders button', function(assert) {
  this.render(hbs`{{reroll-button}}`);

  assert.ok(!!this.$("#reroll-button").length);
  assert.equal(this.$("#reroll-button").text().trim(), "Next Game!");
});

test('it sends an action to it\'s parent on click', function(assert) {
  this.render(hbs`{{reroll-button action="assertAction"}}`);
  this.on("assertAction", function() {
    assert.ok(true);
  });

  this.$("#reroll-button button").click();
});
