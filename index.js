// const foo = (n) => {
//   if (n < 0) {
//     Math.abs(n);
//   }
//   if (n === 0) {
//     return true;
//   }
//   if (n === 1) {
//     return false;
//   } else if({
//     n - 2;
//   }
// };

// foo();
let x = [2, 3, 5];
let results = x.reduce((acc, curr) => {
  acc *= curr;
  return acc;
});
console.log(results);
