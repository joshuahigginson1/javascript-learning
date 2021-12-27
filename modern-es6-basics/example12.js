// Spread Operator on DOM Elements.

const headings = document.querySelectorAll('h1'); // Returns a node list, not an array.
const headingsArray = [...headings];

const result = document.getElementById('result');

console.log(headings);
console.log(headingsArray);

const newInnerHTML = headingsArray.map((item) => `<span>${item.textContent}</span>`).join('')
console.log(newInnerHTML);

result.innerHTML = newInnerHTML;