// ES6 Classes

class BankAccount {
    constructor(username, initialBalance) {  // THIS IS THE EQUIVILENT OF OUR CONSTRUCTOR FUNCTION.
        this.username = username;
        this.balance = initialBalance;
    }

    bank = "Bank of Josh"; // This will be copied to all of our object instantiations, not held in a proto.

    deposit(amount) {
        this.balance += amount;
        console.log(`Greetings ${this.username}! Your balance is now £${this.balance}!`)
    }
}

const john = new BankAccount('JohnSmith123', 100);

console.log(john);
john.deposit(200);
