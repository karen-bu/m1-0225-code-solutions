import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  const read1 = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', read1);
}

async function readSeveral(): Promise<void> {
  const readSeveral1 = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', readSeveral1);
  const readSeveral2 = await read(readSeveral1);
  console.log(elapsed(), 'readSeveral2', readSeveral2);
  const readSeveral3 = await read(readSeveral2);
  console.log(elapsed(), 'readSeveral3', readSeveral3);
}

async function readChained(): Promise<void> {
  const readChained1 = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', readChained1);
  const readChained2 = await read(readChained1);
  console.log(elapsed(), 'readChained2:', readChained2);
  const readChained3 = await read(readChained2);
  console.log(elapsed(), 'readChained3:', readChained3);
}

readOnce()
  .then(() => readSeveral())
  .then(() => readChained());

// function readOnce(): Promise<void> {
//   return read('foo/bar.html').then((msg) =>
//     console.log(elapsed(), 'readOnce:', msg)
//   );
// }

// function readSeveral(): Promise<void> {
//   return read('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral1:', msg);
//       return read('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral2:', msg);
//       return read('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
// }

// function readChained(): Promise<void> {
//   return read('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'readChained1:', msg1);
//       return read(msg1);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'readChained2:', msg2);
//       return read(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
// }
