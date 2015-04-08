import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test("Page contents", function(assert) {
  visit('/currencies').then(function() {
    assert.ok(find('ul li'), "Page contains at least two currencies");
    assert.ok(find('ul li li'), "There are no nested list items");
  });
});
