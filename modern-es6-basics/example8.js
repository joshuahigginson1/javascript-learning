// Destructuring Arrays

const fruits = ["Apple", "Orange", "Banana", "Pear"];
const friends = ["Velma", "Shaggy", "Scooby", "Fred", "Daphne"];

// Accessing values the old way.

// const apple = fruits[0];
// const orange = fruits[1];

// console.log(apple, orange);

// Destructuring.
const [friend0, friend1, friend2, friend3] = friends;

console.log(friend0);
console.log(friend1);
console.log(friend2);

// What if I access an index that's not in my array?
// It returns undefined.

// What happens if we want to skip an item? We just need to add a comma.
[favouriteFruit0,,,favouriteFruit1] = fruits;
console.log(favouriteFruit1);

// Swapping values

let firstPlace = "Max Vestappen";
let secondPlace = "Lewis Hamilton";

// In this scenario, Max and Lewis may be swapping all of the time.
// First place gets swapped to second place, second place gets swapped to first.
[firstPlace, secondPlace] = [secondPlace, firstPlace];

// Object destructuring.

const myObject = {
    firstName: "Alan",
    lastName: "Carr",
    age: 26,
    siblings: {
        sister: 'Jane',
        brother: 'Andrew'
    }
};

// The old way...

const myObjectFirstName = myObject.firstName;
const myObjectSister = myObject.siblings.sister;

// The new way...

const {firstName:myDestructuredFirstName, lastName, age, siblings:{sister:myFavouriteSibling}} = myObject;
console.log(myDestructuredFirstName);
console.log(myFavouriteSibling);


// Destructuring function parameters - inside of the function...

function printPersonInside(personObject) {
    const {firstName, lastName, age} = personObject;
    console.log("printPersonInside:");
    console.log(firstName, lastName, age);
}

printPersonInside(myObject);

// Destructuring function parameters - inside of the function arguments itself!

function printPersonOutside({firstName, lastName, age}) {
    console.log("printPersonOutside:")
    console.log(firstName, lastName, age);
}

printPersonOutside(myObject);