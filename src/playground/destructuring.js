// OBJECT: destructuring the person obj
// const person = {
//     name: 'Andy',
//     age: 21,
//     location: {
//         city: 'NYC',
//         temp: 70
//     }
// };

// grabing the name and age from the person obj and default value
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age} old.`);

// grabing the city and temp property from the nested location obj
// const {city, temp: temperature} =  person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// destructuring the book obj
// const book = {
//     title: 'Envy is the worst',
//     author: 'John Doe',
//     publisher: {
//         name: 'Penguin',
//         year: 1999
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING:

// const address = [ '199 W. June Street', 'New York City', 'New York', '11111' ];

// destructuring the array and variable assigment (,skip zip)
// const [ , city, state = 'New Jersey' ] = address;
// console.log(`You are in, ${city}, ${state}.`);

// grab first and third items of array using destructuring
const items = [ 'Coffee (ICED)', '$3.00', '$3.50', '$3.75' ];

const [ itemName, , medPrice ] = items;

console.log(`A medium ${itemName} costs ${medPrice}`);
