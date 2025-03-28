'use strict';
// querying the DOM
const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('$tabContainer does not exist!');
const $tabElements = document.querySelectorAll('.tab');
if (!$tabElements) throw new Error('$tabElements does not exist!');
const $viewElements = document.querySelectorAll('.view');
if (!$viewElements) throw new Error('$viewElements does not exist!');
// clicking on a tab
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log('eventTarget', $eventTarget);
  // if a tab is successfully clicked,
  if ($eventTarget.matches('.tab')) {
    // set the tab row itself as active
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === $eventTarget) {
        $tabElements[i].className = 'tab active';
      } else if ($tabElements[i] !== $eventTarget) {
        $tabElements[i].className = 'tab';
      }
    }
    // show the correct active data
    const dataViewValues = $eventTarget.getAttribute('data-view');
    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') === dataViewValues) {
        $viewElements[i].className = 'view';
      } else if (
        $viewElements[i].getAttribute('data-view') !== dataViewValues
      ) {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
});
