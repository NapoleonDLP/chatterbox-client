var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%- data.username %> </div>
        <div class="roomname"> <%- data.roomname  %> </div>
        <div class="text"> <%- data.text %> </div>
      </div>
    `)

};