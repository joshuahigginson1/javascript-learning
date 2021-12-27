// Event Propegation Example

const myContainer = document.querySelector('.myContainer');
const myButton = document.querySelector('.myButton');

myButton.addEventListener('click', function(event) {
    const element = document.createElement('h2');
    element.classList.add('myHeading');
    element.textContent = 'I am a dynamically generated header inside of the container.';
    myContainer.appendChild(element);
})
function sayHello() {
    console.log('Hello There!');
}

// // We cannot add event listener to a header that doesn't exist.
// const myHeading = document.querySelector('.myHeading');
// We cannot add event listener to a header that doesn't exist.
// myHeading.addEventListener('click', sayHello);

myContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('myHeading')) {
        sayHello();
    }
});