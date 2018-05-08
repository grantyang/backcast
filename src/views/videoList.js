var VideoListView = Backbone.View.extend({

  initialize: function () {
    // this.collection.on('change', this.render, this);
    // this.render();
    this.collection.on('sync', this.render, this);
    this.$el.on('click', '.nextPageBtn', () => {
      this.collection.search(this.collection.query, this.collection.nextPageToken);
    });
    this.$el.on('click', '.prevPageBtn', () => {
      this.collection.search(this.collection.query, this.collection.prevPageToken);
    });
  },

  render: function () {
    this.$el.children().detach();
    this.$el.html(this.template());
    if (!this.collection.prevPageToken) {
      $('.prevPageBtn').hide();
    }
    this.collection.forEach((video) => {
      var vid = new VideoListEntryView({ model: video }).render();
      this.$el.find('.video-list').append(vid.el.innerHTML);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
