import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
    // We should show loading every time we fetch our drinks.
    showLoading();
    
    try {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData
    } catch (error) {
        console.log(error);
    }
};

export default fetchDrinks