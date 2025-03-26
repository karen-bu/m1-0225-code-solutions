'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm does not exist!');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const $formElementsObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form information', $formElementsObject);
});
