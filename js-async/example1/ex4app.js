// Callback Hell in the DOM.

const myButton = document.querySelector(".btn");

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");

myButton.addEventListener('click', () => {
    console.log('You clicked the button!'); // This is actually asynchronous and handed off to the browser!

    // In one second, I want my first heading to have a colour of red.
    setTimeout(() => {
        firstHeading.classList.toggle('red');
        console.log("The first heading has turned red.");
        setTimeout(() => {
            secondHeading.classList.toggle('orange');
            console.log("The second heading has turned orange.");
            setTimeout(() => {
                thirdHeading.classList.toggle('yellow');
                console.log("The third heading has turned yellow.");
            }, 1000);
        }, 1000);
    }, 1000);
});

// This is basically hell. So next, we will look at promises, and async await without nesting.