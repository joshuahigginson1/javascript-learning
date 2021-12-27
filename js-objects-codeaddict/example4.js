// Prototypal Inheritance Model

function BankAccount(username, initialBalance) {
    this.username = username;
    this.balance = initialBalance;
    // this.deposit = function(amount) {  // Lets move this to a prototype.
    //     this.balance += amount;
    //     console.log(`Hello ${this.username}, your balance is: £${this.balance}.`)
    // };
}

const johnAccount = new BankAccount('JohnSmith123', 200);
const jamesAccount = new BankAccount('JamesBond54', 50000);

// console.log(BankAccount.prototype);  // Returns an object.

// Adding a prototype.

BankAccount.prototype.bank = "Bank of Josh";

console.log('Logging after we have added the prototype.');

console.log(johnAccount.bank);
console.log(jamesAccount.bank);

// Adding a prototype function.

BankAccount.prototype.deposit = function(amount) {  // Lets move this to our prototype.
    this.balance += amount;
    console.log(`Hello ${this.username}, your balance is: £${this.balance}.`)
};

jamesAccount.deposit(500);

// Property Lookups

const newObject = {};
console.log(newObject.constructor);

const newArray = ["One", "Two", "Three"];
console.log(newArray.constructor);

const newFunction = function() {};
console.log(newFunction.constructor);

// We have access to the specific array and object methods because they are stored on a prototype!

console.log(newObject.prototype);