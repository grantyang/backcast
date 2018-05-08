var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function (data) {
    this.videos = new Videos(data);
    this.videos.search('cats');
    this.render();
  },


  render: function () {
    this.$el.html(this.template());
    new SearchView({ el: this.$('.search'), collection: this.videos }).render();
    new VideoPlayerView({ el: this.$('.player'), collection: this.videos }).render();
    new VideoListView({ el: this.$('.list'), collection: this.videos }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
