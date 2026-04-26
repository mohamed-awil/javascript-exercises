// spread oparetor

const numbers = [1, 2, 3];

const allNumbers = [...numbers, 4, 5];
console.log(allNumbers);

// rest parameter

let multiply = (...mNumbers) => {
  return mNumbers.reduce((total, num) => total * num, 1);
};

console.log(multiply(10, 20, 30, 40, 50, 100));
