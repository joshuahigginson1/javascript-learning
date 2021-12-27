// Mouse Events

const clickButton = document.querySelector('#click');
const mouseUpButton = document.querySelector('#mouseup');
const mouseDownButton = document.querySelector('#mousedown');
const mouseEnterButton = document.querySelector('#mouseenter');
const mouseLeaveButton = document.querySelector('#mouseleave');

clickButton.addEventListener('click', function() {
    console.log("A click event is triggered directly after a mouseup event.");
});

mouseUpButton.addEventListener('mouseup', function() {
    console.log("A mouse up event happens as soon as a user releases their left mouse cursor.");
});

mouseDownButton.addEventListener('mousedown', function() {
    console.log("A mouse down event happens as soon as a user presses their left mouse cursor down.");
});

mouseEnterButton.addEventListener('mouseenter', function() {
    console.log("A mouse enter event is triggered as soon as a user's cursor enters the bounding box of that particular element.")
});

mouseLeaveButton.addEventListener('mouseleave', function() {
    console.log("A mouse leave event is triggered as soon as a user's cursor leaves the bounding box of that particular element.")
});

// Keyboard Events

const myHeader = document.querySelector('#HeadingExample');
const keyDownBox = document.querySelector('#keydown');
const keyUpBox = document.querySelector('#keyup');
const keyPressBox = document.querySelector('#keypress');

let randomColours = ['red', 'orange', 'yellow', 'green', 'indigo', 'violet'];

keyDownBox.addEventListener('keydown', function() {
    const randomNumber = Math.floor((Math.random() * randomColours.length));
    myHeader.className = randomColours[randomNumber]; 
    console.log('A keydown event occurs the moment a key is held down. The event is not latching, it will just keep firing if you hold the key down!');
    console.log(keyDownBox.value);
})

keyUpBox.addEventListener('keyup', function() {
    const randomNumber = Math.floor((Math.random() * randomColours.length));
    myHeader.className = randomColours[randomNumber]; 
    console.log('A keyup event fires only once, the moment a key is released after having been pressed down.')
})

keyPressBox.addEventListener('keypress', function() {
    const randomNumber = Math.floor((Math.random() * randomColours.length));
    myHeader.className = randomColours[randomNumber]; 
    console.log('A keypress event occurs the moment a key is held down. Unlike Keydown, the keys are latching, so no matter how long you hold the key down for, it will only ever fire once.')
})