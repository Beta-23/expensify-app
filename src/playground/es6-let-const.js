// Var Can be re-assigned and scoped to a function
var nameVar = 'Bryant';
var nameVar = 'Mike';
console.log(`Hi, ${nameVar}`);

function getPetName() {
    const petName = 'Larry';
    return petName;
}
// petName is in the Global scope here
const petName = getPetName();
console.log(petName);

// Can't re-define a variable with let and const
let nameLet = 'Jet';
nameLet = 'Logan';
console.log(`Hi, ${nameLet}`);

const nameConst = 'Ed';
console.log(`Hi, ${nameConst}`);

// Block scoping, prevent escape of variables (expect UUID to print twice)

const fullName = 'UUID DID';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
 console.log(firstName)
