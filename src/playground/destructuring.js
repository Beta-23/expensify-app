// destructuring the person obj
const person = {
    name: 'Andy',
    age: 21,
    location: {
        city: 'NYC',
        temp: 70
    }
};

// grabing the name and age from the person obj
const {name, age} = person;
console.log(`${name} is ${age} old.`);

// grabing the city and temp property from the nested location obj
const {city, temp: temperature} =  person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}