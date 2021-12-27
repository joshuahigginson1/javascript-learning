// The Target and CurrentTarget properties.

// The second button deliberately has a nested element of "STRONG" written inside. Our goal is to add a pink toggle to all of the buttons we click on.
const allButtons = document.querySelectorAll('button');
console.log(allButtons);

allButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        console.log("The currentTarget property is:")
        console.log(event.currentTarget);
        console.log("The target property is:")
        console.log(event.target);
        // event.target.classList.toggle('violet');  // ONLY the selected element clicked will change.
        event.currentTarget.classList.toggle('violet'); // The entire parent object will change.
    })
});