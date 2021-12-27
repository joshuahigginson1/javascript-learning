// Object basics.

const myAge = 25;
const ageInTenYears = myAge + 10;

const myObject = {
    name: "Josh",
    age: myAge, // Setting a variable as a property value.
    ageInTenYears, // ES6 Shorthand
    married: false,
    'dashed-key': 'Yes, you can do this!',  // Must be accessed using bracket notation only.
    siblings: ["Anna", "Elsa"],
    functionStyleOne: function(name) {
        console.log(`Hello, my name is ${name}!`)
    },
    functionStyleTwo(name) {
        console.log(`Hello, my name is ${name}!`)
    },
    job: {  // Nested Objects
        title: 'DevOps Engineer',
        company: {
            name: 'QA Consulting',
            city: 'Salford'
        },
    },
};

console.log(myObject.name);
console.log(myObject['age']);
myObject.functionStyleOne("Josh");
myObject.functionStyleTwo("Josh");

// Adding a property.;
myObject.city = 'London'
myObject["birthplace"] = 'Edgware';

// Deleting a property.
delete myObject.siblings;

console.log(myObject);

// Accessing Nested Objects.
console.log(myObject.job.company.city);

// Bracket Notation in depth. This has lots of use cases in React Forms.
const dashedKey = 'dashed-key';
console.log(myObject[dashedKey]);