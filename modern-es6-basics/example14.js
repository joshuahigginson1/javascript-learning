// Array Methods

// Array Of - Makes a new array from a given number of arguments.

const friends = Array.of('James', 45, true);
console.log(friends);

// Array From - Turns array-like objects into actual arrays.

const udemy = 'udemy';
console.log(Array.from(udemy));

function countTotal() {
    console.log(arguments); // Could not use forEach/Map etc.
    console.log("The count is:");
    console.log(Array.from(arguments).reduce((total, currNumber) => total+= currNumber, 0)); // COULD use array methods on this.
}

countTotal(1, 2, 3, 4, 5);