// Navigating the DOM

// ChildNodes

const result = document.querySelector('#UnorderedList');
const allChildNodes = result.childNodes;
// console.log(allChildNodes);

// Children

const allChildren = result.children;
console.log(allChildren[0]);

// FirstChild & LastChild

console.log(`The firstChild is:`);
console.log(result.firstChild);

console.log(`The lastChild is:`);
console.log(result.lastChild);

// ParentElement

const heading2 = document.querySelector('h2');
console.log(heading2.parentElement);

const parentElement = heading2.parentElement;
parentElement.style.color = 'Green';

// Siblings

const firstListItem = document.getElementsByClassName('First')[0];
// console.log(firstListItem);

const secondListItem = firstListItem.nextSibling.nextSibling; // Returns Whitespace so we need to run twice.
// secondListItem.style.fontSize = '6px'

const lastListItem = document.querySelector('.Last');
// console.log(lastListItem);

const fourthListItem = lastListItem.previousSibling.previousSibling;
// console.log(fourthListItem);

const secondListItemElement = firstListItem.nextElementSibling;
console.log(secondListItemElement);

const fourthListItemElement = lastListItem.previousElementSibling;
console.log(fourthListItemElement);

// Accessing Text Content within an Element

let difficultTextContent = heading2.firstChild.nodeValue;
console.log(difficultTextContent);

let easyTextContent = heading2.textContent;
console.log(easyTextContent);

// GetAttribute and SetAttribute()

const firstListItemAttributes = document.querySelector('.First');
const firstListItemAttributesClass = firstListItemAttributes.getAttribute('class');
console.log(`The class of our first item is: ${firstListItemAttributesClass}`);

const myHardcodedLink = document.querySelector('a');
const myHardcodedLinkRef = myHardcodedLink.getAttribute('href');
console.log(`Our link takes us to: ${myHardcodedLinkRef}`);

const myNewLink = myHardcodedLink.nextElementSibling.nextElementSibling;
// console.log(myNewLink);
myNewLink.setAttribute('href', 'www.wikipedia.com')
myNewLinkRef = myNewLink.getAttribute('href')
console.log(`Our new link takes us to: ${myNewLinkRef}`)


// ClassName

const firstHeader4 = document.getElementById('FirstHeader4');
firstHeader4.className = 'coloursCSS';
firstHeader4.className = 'betterText'; // This will overwrite the previous.
console.log(`The class name of our first header is now: ${firstHeader4.className}`);

// ClassList

const secondHeader4 = document.getElementById('SecondHeader4');
secondHeader4.className = 'coloursCSS betterText';
console.log(secondHeader4.classList); // Although we assigned as a className with two different classes, this shows as two elements in list.

const thirdHeader4 = document.getElementById('ThirdHeader4');
thirdHeader4.classList.add('coloursCSS');
thirdHeader4.classList.add('betterText');
thirdHeader4.classList.remove('betterText');
thirdHeader4.classList.replace('coloursCSS', 'betterText');

if (thirdHeader4.classList.contains('coloursCSS')) {
    console.log("Our classList contains coloursCSS as a class! :)");
} else {
    console.log('Our classList does not contain coloursCSS as a class! :(');
}
