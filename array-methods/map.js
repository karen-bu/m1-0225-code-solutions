'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const allPrices = prices.map((price) => {
  const regularPrice = price;
  const salePrice = price / 2;
  const item = { regularPrice, salePrice };
  return item;
});
console.log(allPrices);
const formattedPrices = allPrices.map((price, index) => {
  const formattedPrice = `$${allPrices[index].regularPrice.toFixed(2)}`;
  return formattedPrice;
});
console.log(formattedPrices);
