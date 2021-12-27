// Var, Let, and Const scope.

// Global Scope

var amount = 100;

function greet() {
    // Local Scope
    var randomVariable = "SomeRandomValue";
    console.log(`Hello there ${amount} ${randomVariable}!`);
}

greet();

// // our randomVariable is within function local scope, so we cannot log it.
// console.log(randomVariable);

// Testing VAR.

var totalVar = 1000;
var testVar = true;

if (testVar) {
    var totalVar = 'oranges and onions';  // JavaScript allows us to redefine the var 'total'.
    console.log("Hello there, this a test of scoping with Var!");
}

console.log(totalVar);

// Testing LET.

let totalLet = 1000;
let testLet = true;

if (testLet) {
    let totalLet = 'oranges and onions';  // This will not reassign let in the global scope.
    console.log("Hello there, this a test of scoping with Let!");
}

console.log(totalLet);

// Testing CONST.


let totalConst = 1000;
let testConst = true;

if (testConst) {
    let totalConst = 'oranges and onions';  // This will not reassign let in the global scope.
    console.log("Hello there, this a test of scoping with Const!");
}

console.log(totalConst);

// Using let and const, we don't have access to a variable before it has been defined, as they will not be hoisted by JS Compiler.