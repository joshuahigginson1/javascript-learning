const counter = {
    count: 0,
    increment() {
        console.log(this);
        this.count ++;
        console.log(`The count is: ${this.count}.`);
    }
}

const myButton = document.querySelector('#increment');
// // This is pointing to our BUTTON, not our counter object, and will fail.
// myButton.addEventListener('click', counter.increment);

// // Some edge cases. This works, but would fail the moment we removed this event listener.
// myButton.addEventListener('click', counter.increment.bind(counter));

// This is the perfect solution, as 
const increment = counter.increment.bind(counter);
myButton.addEventListener('click', increment);
