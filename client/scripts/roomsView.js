var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  renderRoom: function() {
    console.log('hello from roomsView.js');
    console.log('before', this.$select);
    this.$select.append('<option value="example"> example </option>');
    console.log('after', this.$select);

  }

};
