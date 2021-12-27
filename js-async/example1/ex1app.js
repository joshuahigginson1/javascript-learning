// Synchronous JavaScript

console.log(`I'm first.`);
boilWater();
console.log(`I'm second.`);

function boilWater(time = 10000) {
    console.log('Starting to boil...');
    for (let i = 0;i<time;i++) {
        console.log('Still not done...')

    }
    console.log('Water boiled.');
}

// Imagine I need to make a soup using JS.

console.log("Chopping the onion...");
console.log("Chopping the carrot...");
console.log("Boiling the water...");
boilWater(10000);
console.log('Adding the carrots..');
boilWater(5000);
console.log('Adding the onion...');
console.log("The soup is done!")

// Normally, we would just chop the onion and chop the carrots whilst the water is boiling!
// But because JS is synchronous, we have to wait.