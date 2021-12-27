// Find

const people = [
    {id: 1, firstName: "Peter"},
    {id: 2, firstName: "Elsa"},
    {id: 3, firstName: "Anna"},
]

const grades = ['A', 'A', 'B', 'B', 'C'];
const goodGrades = ['A', 'A', 'B', 'B'];

// Before, with filter, we return an object inside an array.
const annaFilter = people.filter((person) => person.id === 3);
console.log(annaFilter);

// Using find returns just the object.
const annaFind = people.find((person) => person.id === 3);
console.log(annaFind);

// FindIndex

const elsaFindIndex = people.findIndex((person) => person.id === 2);
console.log(elsaFindIndex);

// Use splice to delete Elsa from our array.
const newPeople = [...people];
newPeople.splice(elsaFindIndex, 1);
console.log(newPeople);

// Every

const goodGradesExample1 = grades.every((grade) => grade !== 'C');  // Should return False.
const goodGradesExample2 = goodGrades.every((grade) => grade !== 'C');  // Should return True.
console.log(goodGradesExample1);
console.log(goodGradesExample2);

// Some

const oneBadGradeExample1 = grades.some((grade) => grade === 'C');
const oneBadGradeExample2 = goodGrades.some((grade) => grade === 'C');
console.log(oneBadGradeExample1);
console.log(oneBadGradeExample2);
