// ES5
const square = function(x) {
    return x * x;
};

console.log(square(8));

// ES6 arrow function
const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(10));

// ES6 implicit arrow function
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(9));

// Test arrow functions

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getFirstName('Mike Lee'));

// implicit arrow function
const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName2('LEE Ming'));



