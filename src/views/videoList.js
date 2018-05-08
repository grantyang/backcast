var VideoListView = Backbone.View.extend({

  initialize: function () {
    // this.collection.on('change', this.render, this);
    // this.render();

  },

  render: function () {
    if (this.collection !== undefined) {
      this.collection.forEach((video) => {
        console.log(video);
        new VideoListEntryView({ model: video });
      });
    }
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
