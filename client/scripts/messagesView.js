var MessagesView = {

  $chats: $('#chats'),

  //not responsible for render
  initialize: function() {
    // var results = Messages.data.results;
    // for (var i = 0; i < results.length; i++) {
    //   this.renderMessage(MessageView.render(results[i]));
    // }

    // this.renderMessage(message);
  },

  renderMessages: function() {
    console.log('messages !!!!!!', Messages.data);
  },

  renderMessage: function(message) {
    console.log('4) hello from messagesView.js!');
    console.log(this.$chats);
    this.$chats.append(message);
    // console.log(`data from Messages.data: ${Messages.data}`);

  }

};