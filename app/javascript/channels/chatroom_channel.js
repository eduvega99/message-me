import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log('Conectado a la chatroom');
  },

  disconnected() {
    
  },

  received(data) {
    var scrollContainer = document.querySelector('#messages');
    var messageContainer = document.querySelector('#message-container');
    
    messageContainer.innerHTML += (data['mod_message']);
    scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  }
});
