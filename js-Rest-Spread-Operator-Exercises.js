// Refactor it to use the rest operator & an arrow function
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);
console.log(filterOutOdds(1, 2, 3, 4, 5)); // [2, 4]

// findMin
const findMin = (...nums) => Math.min(...nums);
console.log(findMin(11, 5, 18, 67, 4));

// mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 }); // add () when using =>
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...restArgs) => [
  ...arr,
  ...restArgs.map((arg) => arg * 2),
];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

// Slice and Dice!
const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  console.log(index);
  console.log(...items.slice(0, index));
  console.log(...items.slice(index + 1));
  return [...items.slice(0, index), ...items.slice(index + 1)];
};
console.log(removeRandom([15, 8, 222, 99]));

const extend = (array1, array2) => [...array1, ...array2];
console.log(extend([1, 5, 9], [2, 4, 6, 8]));

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
console.log(addKeyVal({ a: 1 }, "b", 2));

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};
console.log(removeKey({ a: 12, b: 25 }, "b"));

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(combine({ a: 12, b: 25 }, { c: "Good", d: "Poor" }));

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
console.log(update({ a: 46, b: 55 }, "a", 77));
