// queryAll to get nodeList (acts like an array , can ask for i of the nodelist)
// declare a variable to keep track of current position typed and if it matches the span textcontent

const $letter = document.querySelectorAll('.letter');
if (!$letter) throw new Error('$letter does not exist!');
console.log($letter);

for (let i = 0; i < $letter.length; i++) {
  console.log($letter[i].textContent);
}

document.addEventListener('keydown', (event: KeyboardEvent) => {
  const keyPressed = event.key;
  console.log(event.key);

  for (let i = 0; i < $letter.length; i++)
    if (keyPressed === $letter[i].textContent) {
      console.log('matches!');
    } else if (keyPressed !== $letter[i].textContent) {
      console.log('does not match!');
    }
});
