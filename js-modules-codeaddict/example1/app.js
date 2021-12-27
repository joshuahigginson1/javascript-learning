// Modules - Named Exports.
import { people } from './js/data.js'

// Default Exports.
import showPeople from './js/showPeople.js'
import showElement from './js/getElement.js'

const myContainer = showElement('.container');
const myButton = showElement('.btn');

myButton.addEventListener('click', () => myContainer.innerHTML = showPeople(people));