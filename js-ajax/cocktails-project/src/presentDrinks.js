import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

// Once we load a page, we want to fetch our drinks.

// Fetch Drinks, as well as displaying.
// Async right away as we have a fetch.

const presentDrinks = async (url) => {
    // Fetch Drinks.
    const cocktailData = await fetchDrinks(url);
    // console.log(cocktailData);

    // Display Drinks.
    const newSection = await displayDrinks(cocktailData);

    if (newSection) {
        setDrink(newSection);
        // console.log(newSection);
    };
};

export default presentDrinks