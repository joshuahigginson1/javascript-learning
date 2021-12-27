// Asynchronous JavaScript using the browser.

function boilWater(time = 10000) {
    console.log('Starting to boil...');
    setTimeout(() => console.log('Water Boiled!'), time) // This is a MINIMUM time. It is not ACCURATE.
}

// Imagine I need to make a soup using JS, using asynchronicity from the browser.

console.log("Boiling the water...");
boilWater()
console.log("Chopping the onion...");
console.log("Chopping the carrot...");

// This is interesting behaviour.

boilWater(0);  // JS will hand this off to the browser.
console.log("I run after the boilWater function."); // JS will then run this and be busy.
// Here, JS will have the opportunity to run the callback function of boilWater, despite having 0 seconds.

// Other functions that exibit this behaviour are:

// Get Geolocation, Fetch Data, Set Timer.
