import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return require('ic-ajax').default({
      url: 'https://cryptfolio.com/api/v1/currencies',
      type: 'get'
    }).then(function(response) {
      console.log("response:", response.result.length);
      return response.result;
    });

    return {
      "a": 1,
      "b": 2
    };
  }
});
