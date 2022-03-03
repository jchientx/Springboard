const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
console.log(squareAndFindEvens([2, 3, 4, 5])); // [4, 16]
