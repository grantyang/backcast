var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
    // console.log(this.videos);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView().render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
