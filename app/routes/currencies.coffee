`import Ember from "ember"`

routes = Ember.Route.extend
  model: ->
    return require('ic-ajax').default({
      url: 'https://cryptfolio.com/api/v1/currencies',
      type: 'get'
    }).then (response) =>
      return response.result.map (cur) =>
        return @store.createRecord('currency', cur);

`export default routes`
