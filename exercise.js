// Given this function
function filterOutOddsOriginal() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
function filterOutOdds() {
  const nums = [...arguments];
  return nums.filter((num) => num % 2 === 0);
}

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
function findMin() {
  const nums = [...arguments];
  return nums.reduce((min, num) => {
    return num < min ? num : min;
  });
}

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
function doubleAndReturnArgs(array, ...args) {
  return [...array, ...args.map((arg) => arg * 2)];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  const newArray = [...items];
  const randIdx = Math.floor(Math.random() * newArray.length) + 1;
  return newArray.filter((item, i) => item !== randIdx);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
