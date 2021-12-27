// Factory Functions.

function createFactoryPerson(firstName, lastName) {
    return {
        // firstName: firstName,
        firstName, // Shorthand.
        // lastName: lastName,
        lastName, // Shorthand.
        fullName() {
            console.log(`My full name is ${this.firstName} ${this.lastName} and I'm in a factory function!`);
        }
    }
}

const newFactoryPerson = createFactoryPerson('John', 'Oliver').fullName()

// Constructor Functions.

function CreateConstructorPerson(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName} and I'm in a constructor function!`);
    };
}

// Note: We have to use the NEW keyword when using a constructor function.
const newConstructorPerson = new CreateConstructorPerson("Billy", "Joel").fullName()

// The Constructor property.

const andrew = new CreateConstructorPerson("Andrew", "Garfield");
console.log(andrew.constructor);

const newObject = {};
console.log(newObject.constructor);

const newArray = ["One", "Two", "Three"];
console.log(newArray.constructor);

const newFunction = function() {};
console.log(newFunction.constructor);

const suzy = new andrew.constructor('Suzy', 'Shakiel');  // Using our existing andrew object to create a new person!
suzy.fullName()
