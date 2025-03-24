'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList does not exist!');
$taskList?.addEventListener('click', handleClick);
function handleClick(event) {
  const eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $eventTargetParent = eventTarget.closest('.task-list-item');
    if (!$eventTargetParent)
      throw new Error('$eventTargetParent does not exist!');
    $eventTargetParent.remove();
  }
}
