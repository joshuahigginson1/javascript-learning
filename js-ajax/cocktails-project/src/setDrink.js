
const setDrink = (sectionCenter) => {

    // Here, we are relying on event bubbling.
    sectionCenter.addEventListener('click', (event) => {
        // event.preventDefault()

        // console.log("Target:");
        // console.log(event.target);
        // console.log("Current Target:");
        // console.log(event.currentTarget);

        // We need to look for our event target's parent article element, with it's data-id.
        const drinkID = event.target.parentElement.dataset.id;
        // console.log(drinkID);

        // We can use our localstorage to pass this drink ID and maintain it across different pages.
        localStorage.setItem('drinkId', JSON.stringify(drinkID));
    });
};

export default setDrink