// Event Propegation, Bubbling, and Capturing.

const myContainer = document.querySelector('.container');
const myListItems = document.querySelector('.list-items');

function showBubbling(event) {
    console.log('Current Target:', event.currentTarget);
    console.log('Target', event.target);

    if (event.target.classList.contains('link')) {
        console.log("You have clicked on a link!");
    }
}

function stopPropagation(event) {
    console.log('You clicked on a list object, assigned with the stopPropegation function.')
    event.stopPropagation();
}

// Even if I move these JavaScript lines around, you will notice in the console that we will always start at the lowest level object, and end with our 'Window target'.

// myListItems.addEventListener('click', stopPropagation); // This this uncommented, we will stop propegation from any clicks on our list items.
// myContainer.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

// Event Capturing - Root of DOM, down to specific children.

myListItems.addEventListener('click', showBubbling, { capture: true }); // This this uncommented, we will stop propegation from any clicks on our list items.
myContainer.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });