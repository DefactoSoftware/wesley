import Ember from "ember";

export default Ember.View.extend({
  classNames: ['slider'],
  templateName: 'slider',

  createSlider: function() {
    // init noUiSlider
    this.$('.slider-ui').noUiSlider({
      start: 50,
      orientation: 'vertical',
      range: {
        'min': 0,
        'max': 100
      }
    });

  }.on('didInsertElement')
});
