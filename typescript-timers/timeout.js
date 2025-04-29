'use strict';
setTimeout(() => {
  const $message = document.querySelector('.message');
  if (!$message) throw new Error('$message does not exist!');
  $message.textContent = 'Hello There';
}, 2000);
