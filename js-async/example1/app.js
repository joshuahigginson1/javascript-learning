// Promises.

const myButton = document.querySelector(".btn");

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");

myButton.addEventListener('click', () => {
    console.log('You clicked the button!'); // This is actually asynchronous and handed off to the browser!

});

// Setting up a basic promise.

// const myFirstPromise = new Promise((resolve, reject) => {} // This is where we either resolve, or reject.);
const myFirstPromise = new Promise((resolve, reject) => {
    let newValue = true;
    if(newValue) {
        resolve('Hi, the value is true!');

    } else {
        reject(`There was an error. The value is: ${newValue}.`)
    }
});

console.log(myFirstPromise);

// // In order to access our values...
// // Note, this will error out if we return a reject, because we have not caught our rejection.
// myFirstPromise.then((data) => console.log(`The data value is: ${data}`));

myFirstPromise.then(  // Then gets our result on a resolve.
    (result) => {console.log(`The data value is: ${result}`)}
).catch(  // Catch gets our error on a reject.
    (error) => {console.log(error)}
);