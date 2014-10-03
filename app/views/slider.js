import Ember from "ember";

export default Ember.View.extend({
  classNames: ['slider'],
  templateName: 'slider',
  startValue: 0,

  createSlider: function() {
    var self = this;

    // init noUiSlider
    this.$('.slider-ui').noUiSlider({
      start: self.get('startValue'),
      orientation: 'vertical',
      direction: 'rtl',
      range: {
        'min': 0,
        'max': 100
      }
    });
  }.on('didInsertElement')
});
