// Basic Closure

function outer() {
    function inner() {
        console.log(`Hello there! The secret is:`)
    }
    return inner;
}

outer(); // Nothing currently happens, as we need to physically invoke the returned inner function!

// Most likely, we see something like this.
const myInnerFunction = outer();
console.log(myInnerFunction);
myInnerFunction();

// You can also do this.
outer()();

// Function Scope.

function outerComplex() {
    const mySecret = 'Bananas'
    function innerComplex() {
        // Our inner function can access variable in outer function scope.
        console.log(`Hello there! The secret is: ${mySecret}`)
    }
    return innerComplex;
}

outerComplex()();

// // We would not be able to access that secret value from outside of the function scope.
// console.log(mySecret);  // Returns error.

// Basic Example

function newAccount(userName, initialBalance) {
    const balance = initialBalance;
    function showBalance(){
        console.log(`Hi ${userName}, your balance is £${balance}.`);
    }
    return showBalance;
}

newAccount('suzy123', 500)();

const johnAccount = newAccount('JohnBruizer40', 1000);
const craigAcount = newAccount('CraigRulez30', -20);

// Here, the showBalance remembers the value that was first initialised for the rest of the life of this showBalance.
johnAccount();

// Complete Example.

function newComplexAccount(userName, initialBalance) {
    let balance = initialBalance;  // Nobody has access to this balance. They can only manipulate it with the methods we set up.
    function showBalance(){
        console.log(`Hi ${userName}, your balance is £${balance}.`);
    }

    function depositBalance(amount){
        balance += amount;
        showBalance();
    }

    function withdrawBalance(amount){
        if(amount > balance) {
            console.log(`Hi ${userName}. Not enough funds!`)
            return
        } else {
            balance -= amount;
        }
    }
    return {  // Returning as an object.
        showBalance: showBalance,
        depositBalance: depositBalance,
        withdrawBalance: withdrawBalance
    };
}

newAccount('suzy123', 500)();

const jennyAccount = newComplexAccount('jennyrocks', 100);
const aliceAcount = newComplexAccount('AliceinWonderland', 30);

// Allows us to run methods!
jennyAccount.showBalance();
aliceAcount.depositBalance(500);
jennyAccount.withdrawBalance(1000);
aliceAcount.withdrawBalance(50);
