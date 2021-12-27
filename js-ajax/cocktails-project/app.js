// The API we are using: https://www.thecocktaildb.com/api.php

import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

// Set up our default drinks when we first load the page.
const drinkSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

window.addEventListener('DOMContentLoaded', () => {
    // On window load, search for all drinks beginning with a.
    presentDrinks(`${drinkSearchUrl}a`);
})