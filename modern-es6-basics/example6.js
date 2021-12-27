// Arrow Functions and this keyword.

// In a regular function, 'this' refers to the parent, aka anything that is LEFT of the dot.

const bobArray = {
    firstName: "Bob",
    lastName: "Sanders",
    sayname() {
        console.log(this);
        console.log(`Hello my name is ${this.firstName} ${this.lastName}.`);
    }
};

const annaArray = {
    firstName: "Anna",
    lastName: "Anderson",
    sayname: () => {
        console.log(this);
        console.log(`Hello my name is ${this.firstName} ${this.lastName}.`);
    }
};

// Regular Function, THIS refers to the parent. Anything left of the dot.
console.log("Regular Function...");
bobArray.sayname();  // This will return correctly.

// Arrow function, THIS refers to the current surrounding scope.
// In this case, it's not very useful..
console.log("Arrow Function...");
annaArray.sayname();  // This will return undefined as it is referencing the window!

// Lets see where they ARE useful!

const craigArray = {
    firstName: "Craig",
    lastName: "Johnson",
    sayname() {
        setTimeout(function(){
            console.log("Our Craig Array regular function. In this case, our parent is the window object...");
            console.log(this);
            console.log(`Hello my name is ${this.firstName} ${this.lastName}.`);
        }, 2000);
    }
};

craigArray.sayname();

// This is the old way to fix this issue.

const craigArrayFix = {
    firstName: "Craig",
    lastName: "Johnson",
    sayname() {
        self = this;
        setTimeout(function(){
            console.log("Our Craig Array regular function, that has been fixed using old method.");
            console.log(self);
            console.log(`Hello my name is ${self.firstName} ${self.lastName}.`);
        }, 2500);
    }

};

craigArrayFix.sayname();

const billieArray = {
    firstName: "Billie",
    lastName: "Eilish",
    sayname() {
        setTimeout(() => {

            // Calls the setTimeout function WITHIN the sayname function, which is WITHIN the object.
            console.log("This function is using an arrow function within our setTimeout, within a REGULAR function!.");
            console.log(this);
            console.log(`Hello my name is ${this.firstName} ${this.lastName}.`);
        }, 3000)
    }
};

billieArray.sayname()