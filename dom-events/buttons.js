'use strict';
// CLICK EVENT
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$clickButton does not exist :(');
function handleClick(event) {
  console.log('button clicked!');
  console.log('event object:', event);
  console.log('event target:', event.target);
}
$clickButton.addEventListener('click', handleClick);
// MOUSEOVER EVENT
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist :(');
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object:', event);
  console.log('event target:', event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
// DOUBLE-CLICK EVENT
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('button does not exist:(');
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event object:', event);
  console.log('event target', event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
