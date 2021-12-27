// The Event Object

const myHeader = document.querySelector('.myHeader');
const myButton = document.querySelector('.btn');
const myLink = document.querySelector('a');

myHeader.addEventListener('click', function(event) {
    // myHeader.classList.toggle('blue');
    console.log(`The event type is: ${event.type}`);
    event.currentTarget.classList.toggle('blue');
})

myButton.addEventListener('click', function(event) {
    // myHeader.classList.toggle('blue');
    console.log(event.currentTarget);
    // This keyword.
    console.log(this);
})

myLink.addEventListener('click', function(event) {
    console.log("This link SHOULD take us back to the top of the page by default. Instead, we are going to change it's default behaviour.");
    event.preventDefault();
})