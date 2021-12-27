// Var, let and const.

var number = 100;  // Define.
number = 200;  // Update.

// Redefine...
var number = 'Orange';  // Although this doesn't make sense, JavaScript will actually allow us to redefine the variable.

let amount = 500; // Define.
amount = 200; // Update

// // Javascript won't allow us to redefine a variable using let.
// let amount = 7000;

const myName = "Josh"; // Define.

// // JavaScript won't allow us to update a primitive type assigned to const.
// myName = "John";

// It will also not allow us to redefine the variable.
// const myName = "Jenny";

const myObject = {
    name: "Josh",
    age: 25
};

// We CAN mutate a reference type object assigned to a const.
myObject.name = "Chris";
console.log(myObject);

