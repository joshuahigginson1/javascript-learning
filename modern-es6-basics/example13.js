// The REST operator.

const fruit = ['Apple', 'Orange', 'Pear', 'Pineapple'];

const [firstFruit, ...otherFruits] = fruit;
console.log(firstFruit); 
console.log(otherFruits);

const person = { firstName: "John", lastName: "Lennon", age: 64, job: "Musician"};

const {job, ...otherKeys} = person;
console.log(otherKeys);

// The REST Operator must be the last element.

const getAverage = (playerName, ...scores) => {
    console.log(playerName);
    console.log(scores);
    let scoreTotal = 0;
    for (const score of scores) {
        scoreTotal += score;
    }
    let average = Math.round(scoreTotal / scores.length);
    console.log(`${playerName}'s total average is: ${average}!`)
};

// The last part of this function can essentially be infinite!
getAverage("John", 78, 90, 56)

// We can also use the spread operator!
const jamesScores = [34, 55, 99, 98, 97]
getAverage("James", ...jamesScores)