var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var message =
    this.renderMessage(message);
  },

  renderMessage: function(message) {
    console.log('4) hello from messagesView.js!');
    console.log(this.$chats);
    this.$chats.append('<p>DOES THIS FAKE MESSAGE SHOW?</p>');
    // console.log(`data from Messages.data: ${Messages.data}`);
  }

};