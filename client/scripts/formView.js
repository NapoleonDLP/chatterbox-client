var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var submitMessage = $('#message').val(); // a message in type of a string
    // debugger;
    var postMessage = {
      username: App.username,
      roomname: 'private party',
      text: submitMessage
    };
    Parse.create(postMessage, function(){
      console.log('this message was succesfully posted to chat!');
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};