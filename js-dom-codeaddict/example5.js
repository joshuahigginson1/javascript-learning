// Prepend and InnerText.

const newHeading = document.createElement('h2');
newHeading.innerText = `I am a dynamic heading!`;
newHeading.classList.add('blueStyle')
document.body.prepend(newHeading);

// // Removing Elements from the DOM.

// Remove
const textToRemove = document.querySelector('#RemoveThisText');
//textToRemove.remove();

// Remove Child Element
const myDiv = document.querySelector('#Result');
const myParagraph = myDiv.querySelector('p');
myDiv.removeChild(myParagraph);
