var Videos = Backbone.Collection.extend({
  initialize: function () {
    // this.search('dogs');
    this.search = _.debounce(this.nonDebouncedSearch, 500);
    this.query;
    this.nextPageToken;
    this.prevPageToken;
    // this.search = this.nonDebouncedSearch;

  },

  nonDebouncedSearch: function (searchInput, pageToken = '') {
    var dataObj = {
      data: {
        'maxResults': '5',
        'part': 'snippet',
        'key': window.YOUTUBE_API_KEY,
        'q': searchInput,
        'pageToken': pageToken
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
        videos.query = dataObj.data.q;
        console.log(videos.query);
        
        videos.nextPageToken = response.nextPageToken;
        videos.prevPageToken = response.prevPageToken;
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
