var SearchView = Backbone.View.extend({

  initialize: function () {
    this.$el.on('click', '#search-btn', () => { this.collection.search($('#search-input').val()); });

    this.$el.on('keyup', 'input', (event) => {
      this.collection.search($('input').val());
    });
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
