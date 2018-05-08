var VideoListEntryView = Backbone.View.extend({

  initialize: function (video) {

  },


  render: function () {
    this.$el.html(this.template(this.model.attributes));
    $(document).on('click', `#${this.model.id}`, () => { this.model.select(); });
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
