// // Arrow Functions.

// function example1(){
//     console.log("Hi!");
// }

const example1 = () => console.log("Hi!");
example1();

// const example2 = function(firstName) {
//     console.log(`Hi ${firstName}!`);
// }

const example2 = (firstName) => console.log(`Hi ${firstName}!`);
example2("John");

// function example3(num1, num2) {
//     return num1 * num2;
// }

const example3 = (num1, num2) => num1 * num2;
console.log(example3(4, 5));

const example4 = (num1, num2) => {
    const result = num1 * num2;
    // More code here...
    return result;
}

// Returning an object requires you to wrap the object in ().
const example5 = () => ({firstName: "Chris", age: 16});

// Arrow functions really shine as callback functions. In this case, we are talking about anonymous functions.

const example6Array = [1, 2, 3, 4, 5, 6];
const example6 = example6Array.filter((number) => number > 2);
console.log("Example 6:");
console.log(example6);

console.log("Example 7:")
const example7 = example6Array.filter((number, index) => {
    console.log(`The index is: ${index} and the number is ${number}`);
    return number > 2;
});

console.log(example7);

// Set arrow functions as add event listener callback functions.

const example8Button = document.querySelector(".myButton");

example8Button.addEventListener('click', () => console.log("You clicked me!"));

// Good old regular function, this is the perfect application to do so.

// example8Button.addEventListener('click', function() {
//     this.classList.toggle('red');
// });

// Arrow Functions and selected Elements.

example8Button.addEventListener('click', function() {
    // We set the scope of of our regular function to THIS being example8Button.
    // Because our arrow function is now within the scope of our regular function, THIS will also be referencing example8Button.
    setTimeout(() => {this.classList.toggle('red')}, 2000);
})

