var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('select', (model) => this.render(model));
    this.collection.on('sync', () => this.collection.models[0].select());

  },


  render: function (model) {
    if (model !== undefined) {
      this.$el.html(this.template(model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
