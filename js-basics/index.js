// This is my first javascript code!
let testName = 'Bill';

// Declaring multiple variables properly.
let firstName = 'John';
let lastName = 'Doe';

// Declaring constants.
const fixedNumberConstant = 34;

// Primitive values.
const stringLiteral = 'Christian'; // String Literal
const numberLiteral = 30; // Number Literal
const boolLiteral = true; // Boolean Literal
const undLiteral = undefined; // Rare to see this.
const nullLiteral = null; // Null primitive.
// Also symbol...

// Dynamic Typing

let dynamicType = 'Josh';

console.log("The type of our dynamic variable is:");
console.log(typeof dynamicType);
console.log("And it's value is:");
console.log(dynamicType);

dynamicType = 30;

console.log("The type of our dynamic variable is:");
console.log(typeof dynamicType);
console.log("And it's value is:");
console.log(dynamicType);

// Objects

let person = {
    personName: "Jennifer",
    personAge: 55
};

console.log(person);

// Dot Notation

person.personName = 'Chris';
console.log(person.personName);

// Bracket Notation

person['personName'] = 'Mary';
console.log(person['personName']);

// Dynamic Property Selection

let userSelection = 'personName';
console.log(person[userSelection]);

// Arrays

let myFirstArray = ['Red', 'Orange', 'Yellow', "Green", 1, 2, 3];
myFirstArray[7] = true;
console.log(myFirstArray[7]);
console.log(myFirstArray.length);

// Functions

function debugItemType(itemToDebug) {
    console.log("The type of our dynamic variable is:");
    console.log(typeof itemToDebug);
    console.log("And it's value is:");
    console.log(itemToDebug);
}

debugItemType(myFirstArray);
debugItemType(myFirstArray[7]);

// Returning a value from a function.

function squareNumber(numberToSquare) {
    return numberToSquare * numberToSquare;
}

squareNumberVariable = squareNumber(4);
console.log(squareNumberVariable);

console.log(squareNumber(12));