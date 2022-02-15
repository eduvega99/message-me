import consumer from "./consumer"
import { scrollBottomMessages } from "../packs/application"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log('Conectado a la chatroom');
  },

  disconnected() {
    
  },

  received(data) {
    var messageContainer = document.querySelector('#message-container');
    messageContainer.innerHTML += (data['mod_message']);
    scrollBottomMessages();
  }
});