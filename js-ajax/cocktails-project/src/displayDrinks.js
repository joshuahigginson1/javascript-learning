import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

// Destructuring our drinks object, with a property of drinks.
const displayDrinks = ({ drinks }) => {
    const sectionCenter = getElement('.section-center');
    const userTitle = getElement('.title');

    if (!drinks) {
        // We have fetched our drinks, so we will first need to hide our loading.
        hideLoading();
        // If there are no drinks, then the API will return a null result.
        // I want to send a message to the user to indicate this.
        userTitle.textContent = "Sorry, no drinks match your search!";

        // Clear all drinks from the sectionCenter.
        sectionCenter.innerHTML = null;

        // Return nothing.
        return
    }

    // We have fetched our drinks, so we will first need to hide our loading.
    hideLoading();

    // If my request is successful, I want to show the drinks in our HTML center-section.
    // Destructure our drink from within function parameters.
    const newDrinks = drinks.map(({ idDrink:drinkID, strDrink:drinkName, strDrinkThumb:drinkImageUrl }) => {

        return `
        <a href="drink.html">
          <article class = "cocktail" data-id="${drinkID}">
            <img src="${drinkImageUrl}" alt="A cocktail called: ${drinkName}/">
            <h3>${drinkName}</h3>
          </article>
        </a>
        `
    }).join("");

    // Set our userTitle to clear.

    userTitle.textContent = "";

    sectionCenter.innerHTML = newDrinks;
    return sectionCenter;

    // Hide loading.

    console.log(drinks);

};

export default displayDrinks