import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var store = this.store;
    return require('ic-ajax').default({
      url: 'https://cryptfolio.com/api/v1/currency/' + params.code,
      type: 'get'
    }).then(function(response) {
      return store.createRecord('currency', response.result);
    });
  }
});
