// arguments object - no longer bound with arrow funtions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(1,2));

// this keyword - no longer bound

const user = {
    name: 'Jordan',
    cities: ['PA', 'NY', 'WA'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
// call the user object
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 8, 4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((newnum) => this.multiplyBy * newnum);
    }
};

console.log(multiplier.multiply());