var VideoListEntryView = Backbone.View.extend({

  initialize: function () {

  },


  render: function () {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').attr('id', `${this.model.id}`);
    this.$el.on('click', `#${this.model.id}`, () => { this.model.select(); });
    $(document).on('click', `#${this.model.id}`, () => { this.model.select(); });
    //Passes test for should call select on the model when the title is clicked
    //Why it works: registers listener on document but spec test functions never append to document

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
