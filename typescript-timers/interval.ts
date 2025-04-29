const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay does not exist!');

let count = 4;
const intervalID = setInterval(() => {
  count--;
  $countdownDisplay.textContent = String(count);
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
