import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var store = this.store;

    return require('ic-ajax').default({
      url: 'https://cryptfolio.com/api/v1/currencies',
      type: 'get'
    }).then(function(response) {
      return response.result.map(function(cur) {
        return store.createRecord('currency', cur);
      });
    });
  }
});
