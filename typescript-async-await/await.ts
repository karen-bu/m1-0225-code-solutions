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
  const readSeveral2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2', readSeveral2);
  const readSeveral3 = await read('foo3/bar.html');
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

await readOnce();
await readSeveral();
await readChained();
