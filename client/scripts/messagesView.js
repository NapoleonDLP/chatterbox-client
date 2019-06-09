var MessagesView = {

  $chats: $('#chats'),

  //not responsible for render
  initialize: function() {
    // var results = Messages.data.results;
    // for (var i = 0; i < results.length; i++) {
    //   this.renderMessage(MessageView.render(results[i]));
    // }

    console.log('this ran');
  },

  renderMessages: function() {
    console.log('messages !!!!!!', Messages.data);
    var messages = Messages.data.results;
    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      this.renderMessage(MessageView.render({data: message}));
    }
  },

  renderMessage: function(message) {
    // {objectId: "lF6d1o213Z", username: "Reeky", roomname: "Talladega", text: "blah"}
    console.log('4) hello from messagesView.js!');
    console.log(this.$chats);
    this.$chats.append(message);
    // console.log(`data from Messages.data: ${Messages.data}`);

  }

};