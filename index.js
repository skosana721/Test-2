let x = [2, 3, 5];
let results = x.reduce((acc, curr) => {
  acc *= curr;
  return acc;
});
