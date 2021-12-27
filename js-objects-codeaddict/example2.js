// THIS keyword basics.

const john = {
    firstName: "John",
    lastName: "Anderson",
    fullName(){
        // console.log(`My full name is John Anderson.`); // Not sustainable over time.
        console.log(`My full name is ${this.firstName} ${this.lastName}.`);
    },
}

const bob = {
    firstName: "Bob",
    lastName: "Sanders",
    fullName(){
        // console.log(`My full name is Bob Sanders.`); // Not sustainable over time.
        console.log(`My full name is ${this.firstName} ${this.lastName}.`);
    },
}

// The THIS keyword points to the object LEFT of the dot. AKA, the john object, or the bob object.
john.fullName();
bob.fullName();

// // This keyword - Advanced.

// Broken Example of THIS.
const brokenThisExample = john.fullName;  // Assigning an uninitialised function to a constant.
brokenThisExample()  // Defaults to running this on our global window object.

console.log(this); // Defaults to THIS on our global windows object.

function showThis(){
    console.log(this);
}

const peter = {
    name: 'Peter',
    showThis: showThis  // Instead of setting up the function, we assign it to our object.
}

const bobo = {
    name: 'Bobo',
    showThis: showThis  // Instead of setting up the function, we assign it to our object.
}

peter.showThis();  // Shows the Peter object.
bobo.showThis();  // Shows the Bobo object.
showThis();  // Shows the global window object.

// Showing the THIS object using DOM objects.

const buttonOne = document.querySelector('.btn-1');
const buttonTwo = document.querySelector('.btn-2');

// Since our showThis callback is to the left of the dot, our 'this' keyword references button one.
buttonOne.addEventListener('click', showThis);

// Since our showThis is not actually to the left of the dot, then in this scenario, we will return the global window function.
buttonTwo.addEventListener('click', function(){
    showThis()
});
