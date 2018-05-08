var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    this.render();
    this.videoPlayerView.render();
    this.videoListView.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
