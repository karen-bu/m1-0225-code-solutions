const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('$openModal does not exist!');

const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('$dismissModal does not exist!');

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog does not exist!');

// OPEN MODAL

$openModal.addEventListener('click', openModal);
function openModal(): void {
  if (!$dialog) throw new Error('$dialog does not exist!');
  $dialog.showModal();
}

// CLOSE MODAL
$dismissModal.addEventListener('click', dismissModal);
function dismissModal(): void {
  if (!$dialog) throw new Error('$dialog does not exist!');
  $dialog.close();
}
