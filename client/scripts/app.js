var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    console.log('1) hello from app.js!');

    App.username = window.location.search.substr(10);
    // debugger;
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();



    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    console.log('hello from FETCH app.js!');
    Parse.readAll((data) => {
      console.log('data!!!!!!!!!!', data);
      Messages.data = data;
      //why isnt the message from here console logging
      MessagesView.renderMessages();
      console.log(`data from Messages.data: ${Messages.data}`);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
