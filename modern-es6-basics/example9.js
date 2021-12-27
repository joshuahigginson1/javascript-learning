// New string methods.

const person = 'Biggie Smalls';
const employee = '23456-EMPLOYEE-BIGGIE-SMALLS';
const manager = '23456-MANAGER-JOHN-JOHANSON';

// startsWith()
// It is CASE SENSITIVE.
console.log(person.startsWith('Biggie'));

// You can also enter a starting position to ommit junk in front of a string.
console.log(employee.startsWith('EMPLOYEE', 6));

// endsWith()
console.log(manager.endsWith('JOHANSON'));

// You can also enter a range, in this example, we are telling JS to look at the first 9 characters.
console.log(manager.endsWith('MAN', 9));

// includes()
console.log(employee.includes("BIGGIE-SMALLS"));

// repeat() simply repeats a string.

const multiplyPeople = (person, amount = 5) => {
    return person.repeat(amount);
}

console.log(multiplyPeople(person, 3));