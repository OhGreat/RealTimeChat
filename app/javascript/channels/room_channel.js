import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("We are live")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').prepend('<div class="message">'+ data.content + '</div>')
    console.log(data.content)
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_messages;

$(document).on('turbolinks:load', function() {
  submit_messages()
})

submit_messages = function() {
  $('#messages').on('keydown', function(event) {

    if (event.keyCode == 13) {
      console.log('enter was hitted')
    }
  })
}