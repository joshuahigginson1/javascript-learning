import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";
import getElement from "./utils/getElement.js";

const myButton = getElement('.btn');

const showUser = async () => {

    // Get user from our API.
    const newPerson = await getUser();

    // Display our user.
    displayUser(newPerson);
}

window.addEventListener('DOMContentLoaded', showUser);
myButton.addEventListener('click', showUser);