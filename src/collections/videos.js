var Videos = Backbone.Collection.extend({
  initialize: function () {
    // this.search('dogs');
    this.search = _.debounce(this.nonDebouncedSearch, 500);
    // this.search = this.nonDebouncedSearch;

  },

  nonDebouncedSearch: function (searchInput) {
    var dataObj = {
      data: {
        'maxResults': '5',
        'part': 'snippet',
        'key': window.YOUTUBE_API_KEY,
        'q': searchInput,
        'type': ''
      }
    };
    this.fetch(dataObj);
  },

  fetch: function (dataObj) {
    console.log('fetch called');
    var videos = this;
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: dataObj.data,
      contentType: 'application/json',
      success: function (response) {
        console.log('GET success!');
        videos.reset();
        videos.add(videos.parse(response));
        videos.trigger('sync', videos);
      },
      error: function () {
        console.log('GET failure!');
      }
    });
  },
  parse: function (input) {
    return input.items;
  },
  model: Video
});
