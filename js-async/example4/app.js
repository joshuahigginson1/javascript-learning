// Promises Async Await example.

// // In a regular function.
// async function regularFunction () {
//     await
// }
// // In an arrow function.
// const arrowFunction = async () => {
//     await
// }

const myButton = document.querySelector(".btn");

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");
const notAnElement = null;

myButton.addEventListener('click', async () => {
    console.log('You clicked the button!');
    // await makes sure a promise is settled.
    try {
        await addColour(1000, firstHeading, 'red');
        await addColour(1000, secondHeading, 'orange');
        await addColour(1000, thirdHeading, 'yellow');
        await addColour(1000, notAnElement, 'red');  // Deliberate fail.
    } catch (error) {
        console.log(error);
    }
});

function addColour(time, element, colour) {
    return new Promise((resolve, reject) => {
        if (element) {  // If element exists, then apply colour in certain amount of time.
            setTimeout(() => {
                element.classList.toggle(colour);
                resolve() // We don't actually need to provide data, but we can only chain .then if we do resolve.
            }, time);
        } else {  // Else, throw an error.
            reject(new Error(`There is no such element: $${element}`))
        }; 
    });
}