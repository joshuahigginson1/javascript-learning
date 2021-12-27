// Callback Hell and Promises.

function boilWater(time = 10000) {
    console.log('Starting to boil...');
    setTimeout(() => {
        console.log('Water Boiled!');
        console.log('Adding carrots...');
        console.log('Chopping the onion...');
        setTimeout(() => {
            console.log('Carrots done!');
            console.log('Adding onion...');
            setTimeout(() => {
                console.log('Onion done!');
            }, (time / 2));
        }, (time / 2));
    }, time) // This is a MINIMUM time. It is not ACCURATE.
}

// Soup Example.

console.log("Boiling the water...");
boilWater()
console.log("Chopping the carrots...");

// We actually need to add some wait functionality, to get our timings correct on our soup.