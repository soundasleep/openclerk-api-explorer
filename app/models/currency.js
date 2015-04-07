import DS from "ember-data";

export default DS.Model.extend({
  code: DS.attr('string'),
  abbr: DS.attr('string'),
  name: DS.attr('string'),

  cryptocurrency: DS.attr('boolean'),
  fiat: DS.attr('boolean'),
  commodity: DS.attr('boolean'),

  type: function() {
    var s = [];
    if (this.get('cryptocurrency')) {
      s.push("Cryptocurrency");
    }
    if (this.get('fiat')) {
      s.push("Fiat currency");
    }
    if (this.get('commodity')) {
      s.push("Commodity currency");
    }
    return s.join(", ");
  }.property('cryptocurrency', 'fiat', 'commodity')
});
