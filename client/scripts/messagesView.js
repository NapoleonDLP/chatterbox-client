var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    console.log('hello from messagesView.js!');
    console.log(this.$chats);
    this.$chats.append('<p>DOES THIS FAKE MESSAGE SHOW</p>');
  }

};