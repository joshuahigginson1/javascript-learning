// // Creating New Elements in JavaScript.

// Create two new elements.
const newBodyDiv = document.createElement('div');
const newTextNode = document.createTextNode('A Simple Body Div, created dynamically in JavaScript.');

// Append our new text node to our new body div.
newBodyDiv.appendChild(newTextNode);

// Append our new body div to the document body itself.
document.body.appendChild(newBodyDiv);

// // Repeat for pre-existing HTML elements.
const myDiv = document.getElementById('Result');

const newDynamicHeader1 = document.createElement('h2');
const newDynamicHeader1Text = document.createTextNode('This is a h2 element, generated in JavaScript.');

newDynamicHeader1.appendChild(newDynamicHeader1Text);
myDiv.appendChild(newDynamicHeader1);
newDynamicHeader1.classList.add('blueStyle');

// Check what children that our HTML created Div has.
console.log(myDiv.children);

// Insert Before.

const newDynamicHeader2 = document.createElement('h3');
const newDynamicHeader2Text = document.createTextNode('This is a h3 element, generated in JavaScript.');
newDynamicHeader2.appendChild(newDynamicHeader2Text);
document.body.insertBefore(newDynamicHeader2, newBodyDiv);

const newDynamicHeader3 = document.createElement('h4');
const newDynamicHeader3Text = document.createTextNode('This is a h4 element, dymanically created in JavaScript.');
newDynamicHeader3.appendChild(newDynamicHeader3Text);
newDynamicHeader3.classList.add('redStyle');

const selectFirstHeaderElement = document.querySelector('h1');
myDiv.insertBefore(newDynamicHeader3, selectFirstHeaderElement);

// Replace Child.

const childReplacement = document.createElement('h2');
const childReplacementText = document.createTextNode('This element replaces our simple body div.');
childReplacement.appendChild(childReplacementText);
document.body.replaceChild(childReplacement, newBodyDiv);