import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const displaySingleDrink = (data) => {
    // Our data has loaded. so we hide loading now.
    hideLoading()
    // Destructuring in function parameters would be too hard to read.
    const drink = data.drinks[0];
    const {strDrinkThumb: drinkImg, strDrink: drinkName, strInstructions:drinkDescription} = drink;

    // Get all of our ingredients.

    const drinkIngredientsList = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
    ];

    document.title = drinkName;

    const drinkImgElement = getElement('.drink-img');
    drinkImgElement.src = drinkImg;

    const drinkNameElement = getElement('.drink-name');
    drinkNameElement.textContent = drinkName;

    const drinkDescriptionElement = getElement('.drink-desc');
    drinkDescriptionElement.textContent = drinkDescription;

    const drinkIngredientsElement = getElement('.drink-ingredients');
    drinkIngredientsElement.innerHTML = drinkIngredientsList.map((ingredient) => {
        // If ingredient is null, return empty.
        if (!ingredient) return;
        // Else, return a template string.
        return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    }).join("");
    
    // console.log(drink, drinkIngredientsList);

}

export default displaySingleDrink