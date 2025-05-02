const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((item) => console.log('values.forEach:', item));
values.forEach((item, index) =>
  console.log('values reversed:', values[values.length - 1 - index])
);
