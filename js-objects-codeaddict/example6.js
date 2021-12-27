const john = {
    firstName: 'John',
    age: 34,
    greet() {
        console.log(this);
        console.log(`Hello, I am ${this.firstName} and I am ${this.age} years old.`);
    },
    address(city, country) {
        console.log(`${this.firstName} lives in ${city}, ${country}.`);
    }
};

const susan = {
    firstName: 'Susan',
    age: 31
};

// Example of the Call method, telling exactly which object 'this' is.

console.log("This is John's greet function:");
john.greet()

console.log("This is using the extracted greet function, on our susan object.")
const extractedGreetFunction = john.greet;
extractedGreetFunction.call(susan);

extractedGreetFunction.call({firstName: 'Bob', age: 64});

// We can even do this!
john.greet.call(susan);

// Call method using arguments.
const extractedAddressFunction = john.address;
console.log("Call method using arguments...");
extractedAddressFunction.call(john, "London", "England");
extractedAddressFunction.call(susan, "California", "USA");

// Apply using arguments.
console.log("Apply method using arguments...");
extractedAddressFunction.apply(john, ["London", "England"]);
extractedAddressFunction.apply(susan, ["California", "USA"]);

// Bind.

console.log("We are binding our functions to Susan...");
const susanGreet = extractedGreetFunction.bind(susan);
const susanAddress = extractedAddressFunction.bind(susan, "California", "USA");

console.log("Now we are applying them!");
susanGreet()
susanAddress()