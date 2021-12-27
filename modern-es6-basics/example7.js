// Default Parameters and Arrow function gotchas.

const john = 'John';
const peter = 'Peter';

function sayHi(person = 'Unknown Person') {
    console.log(`Hi ${person}!`)
}

const sayHello = (person = 'Unknown Person') => console.log(`Hello ${person}!`);

// To avoid undefined behaviour, we can configure default parameters for our values.

sayHi();
sayHi(peter);

sayHello();
sayHello(john);