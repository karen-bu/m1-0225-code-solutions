'use strict';
const $lightSwitch = document.querySelector('.dot.on');
if (!$lightSwitch) throw new Error('$lightSwitch does not exist!');
const $backgroundColor = document.querySelector('.container.on');
if (!$backgroundColor) throw new Error('$backgroundColor does not exist!');
$lightSwitch?.addEventListener('click', () => {
  if ($lightSwitch.className === 'dot on') {
    $lightSwitch.className = 'dot off';
    $backgroundColor.className = 'container off';
  } else if ($lightSwitch.className === 'dot off') {
    $lightSwitch.className = 'dot on';
    $backgroundColor.className = 'container on';
  }
});
// $lightSwitch?.addEventListener('click', lightsOn);
// function lightsOn(event: Event): void {
//   if (!$lightSwitch) throw new Error('$lightSwitch does not exist!');
//   if (!$backgroundColor) throw new Error('$backgroundColor does not exist!');
//   $lightSwitch.className = 'dot off';
//   $backgroundColor.className = 'container off';
// }
