// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function() {

  $('.ui.dropdown').dropdown();

  let closeMessage = document.querySelector('.message .close');
  if ( closeMessage ) {
    closeMessage.addEventListener('click', function ( e ) {
      e.target.closest('.message').classList.add('transition', 'hidden');
    });
  }

  scrollBottomMessages();

  let input = document.querySelector('#input-message');
  if ( input ) {
    createOnSubmitListener(input)
  }

});

function createOnSubmitListener(inputField) {
  inputField.addEventListener('keyup', function (e) {
    if ( e.keyCode == 13 ) {
      e.target.value = '';
    }
  });
}

export function scrollBottomMessages() {
  let scrollContainer = document.querySelector('#messages');
  if (scrollContainer) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  }
}