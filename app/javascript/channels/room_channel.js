import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').prepend('<div class="message">'+ data.content + '</div>')
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_messages;

$(document).on('turbolinks:load', function() {
  submit_messages()
})

submit_messages = function() {
  $('.new_msg_form_content').on('keydown', function(event) {

    if (event.keyCode === 13) { //if enter was hit..
      $('input').click()
      event.target.value = ''
      event.preventDefault()
    }
  })
}