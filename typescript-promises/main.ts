import { takeAChance } from './take-a-chance.js';

takeAChance('Karen Bu')
  .then((message) => console.log(message))
  .catch((error) => console.error(`${error.message}`));
