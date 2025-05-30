function handleFocus(event: Event): void {
  console.log('focus event was fired');
  const $eventTarget = event?.target as HTMLInputElement;
  console.log('$eventTarget name:', $eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const $eventTarget = event?.target as HTMLInputElement;
  console.log('$eventTarget name', $eventTarget.name);
}

function handleInput(event: Event): void {
  const $eventTarget = event?.target as HTMLInputElement;
  console.log('$eventTarget name', $eventTarget.name);
  console.log('$eventTarget value', $eventTarget.value);
}

const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('$formInputs does not exist!');

const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('$formInputs does not exist!');

const $userMessage = document.querySelector('#user-message');
if (!$userMessage) throw new Error('$formTextArea does not exist!');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
