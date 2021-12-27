// If I have something in global scope, and import it into app.js, the moment it is 'imported', those lines of code will run without invoking.
// Same as Python.

import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const drinkSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const myForm = getElement('.search-form');
const myInput = getElement('[name="drink"]');

myForm.addEventListener('keyup', (event) => {
    event.preventDefault();

    // If no value, don't do anything.

    if (!myInput.value) return;
    // If value is not empty, we need to run our present drinks function.
    presentDrinks(`${drinkSearchUrl}${myInput.value}`);

});
