// The Spread operator.

const udemy = 'udemy';
const udemyLetters = [...udemy];
console.log(udemyLetters);

const aquaintances = ["Nigel", "Alan", "Chris", "Alec"];
const bestFriends = ["Colin", "Aster"];

// Split iterable into single items, and then copy them.
const allFriends = [...aquaintances, ...bestFriends];

console.log(allFriends);

// // Both of these reference the SAME area of memory. Therefore, mutating newFriends would also change allFriends.
// const newFriends = allFriends;

// This is why we also use the spread operator.
const newFriends = [...allFriends];

// Spread Operator on Objects - ES8.

const personObject = {
    firstName: 'John',
    job: 'Developer'
};

console.log("Original Object:");
console.log(personObject);

const newPerson = {...personObject, city: 'Chicago', firstName: 'Peter'};
console.log("New Object:");
console.log(newPerson);

// Spread Operator on Function Arguments.

const numbersArray = [23, 45, 66, 88, 2345];  // We cannot pass an array directly into Math.max.

//Math.max(numbersArray);
console.log(Math.max(...numbersArray));

// We can do this with our own functions.

const nameArray = ["John", "Sanders"];
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}!`);

sayHello(...nameArray);

