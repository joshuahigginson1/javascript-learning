// Form Submission Example.

const form = document.querySelector('#form');
const nameField = document.querySelector('#name');
const passField = document.querySelector('#password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!');
    console.log(`The User's name is: ${nameField.value}`);
    console.log(`The User's password is: ${passField.value}`);
})

// Web Storage API.

sessionStorage.setItem('name', 'Peter Session Storage');
localStorage.setItem('name', 'peter');

// Overwrite a key value pair.

localStorage.setItem('name', 'Peter');
localStorage.setItem('job', 'Developer');
localStorage.setItem('address', 'Maryland');

function logLocalStorage() {
    console.log(`The name is ${localStorage.getItem('name')}.`);
    console.log(`The job is ${localStorage.getItem('job')}.`);
    console.log(`The address is ${localStorage.getItem('address')}.`);
}

logLocalStorage()

// Remove one specific item.

console.log("Removing one item...");
localStorage.removeItem('job');

logLocalStorage()

// // Clearing local storage.
// console.log("Clearing local storage.")
// localStorage.clear()
// logLocalStorage()

// // JSON Storage

const friends = ['John', 'Jane', 'Jill'];

// // The wrong way to do it!

// localStorage.setItem('friends', friends);
// console.log(localStorage.getItem('friends')[0]);

// JSON Stringify converts our array to string.

localStorage.setItem('friends', JSON.stringify(friends));

const ourFriends = JSON.parse(localStorage.getItem('friends'));
ourFriends.reduce(function(acc, friend){
    console.log(`Friend #${acc} is: ${friend}`);
    acc ++;
    return acc;
}, 1)

// Check if we already have data in our localStorage.

let favouriteFruits;

if (localStorage.getItem('favouriteFruits')){

    favouriteFruits = JSON.parse(localStorage.getItem('favouriteFruits'));

} else {
    favouriteFruits = [];
}

console.log(`Our favourite fruits are: ${favouriteFruits}`);

favouriteFruits.push('Orange');
localStorage.setItem('favouriteFruits', JSON.stringify(favouriteFruits));