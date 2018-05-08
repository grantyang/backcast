var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.currentVideo;
    this.autoplayValue = 0;
    this.collection.on('select', (model) => this.render(model));
    this.collection.on('sync', () => this.collection.models[0].select());
    this.$el.on('click', '#expandBtn', () => { this.expand(); });
    this.$el.on('change', '.autoplaySlider', () => {
      this.autoplayValue = this.autoplayValue === 0 ? 1 : 0;
      this.render(this.currentVideo);
    });
  },

  expand: function () {
    var currentVideo = this.currentVideo;
    var video = this;
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/videos',
      type: 'GET',
      data: {
        'id': currentVideo.id,
        'part': 'snippet',
        'key': window.YOUTUBE_API_KEY,
      },
      contentType: 'application/json',
      success: function (response) {
        console.log('expand success!');
        // console.log(response);
        video.render(response.items[0]);
      },
      error: function () {
        console.log('GET failure!');
      }
    });
  },


  render: function (model) {
    this.currentVideo = model;
    if (model !== undefined) {
      if (model.attributes !== undefined) {
        this.$el.html(this.template(
          Object.assign({
            autoplayValue: this.autoplayValue,
            checked: this.autoplayValue ? 'checked' : ''
          }, model.attributes)));
      } else {
        this.$el.html(this.template(
          Object.assign({
            autoplayValue: this.autoplayValue,
            checked: this.autoplayValue ? 'checked' : ''
          }, model)));
      }
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
