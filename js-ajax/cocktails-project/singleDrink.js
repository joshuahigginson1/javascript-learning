import fetchDrinks from './src/fetchDrinks.js';
import displaySingleDrink from './src/displaySingleDrink.js'

const singleDrinkLookupUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const presentDrink = async () => {
    const drinkId = JSON.parse(localStorage.getItem("drinkId"));

    // If we don't return a drink ID, we want to return our user to the homepage.
    if (!drinkId) window.location.replace('index.html');
    
    const drink = await fetchDrinks(`${singleDrinkLookupUrl}${drinkId}`);
    displaySingleDrink(drink);
}

window.addEventListener('DOMContentLoaded', () => {
    presentDrink()
})