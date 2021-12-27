// TextContent and innerHTML.

const myTextDiv = document.getElementById('TextDiv');
const myList = document.getElementById('UnorderedList');

console.log(myList.innerHTML);
console.log(myList.textContent);

// Easier Way to create an element.

const myNewList = document.createElement('ul');
myNewList.innerHTML = `
<li class = 'ListItem'>Spiderman</li>
<li class = 'ListItem'>Wonder Woman</li>
<li class = 'ListItem'>Green Lantern</li>
`
document.body.appendChild(myNewList);

// CSS Styling - Don't do it in Javascript, add it in a stylesheet.

const myTextToStyle = document.querySelector('.TextToStyle');
myTextToStyle.classList.add('funTextStyling');

console.log(myTextToStyle.classList);