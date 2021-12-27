import getElement from "./utils/getElement.js";

const apiUrl = 'https://randomuser.me/api/';

const myImg = getElement('.user-img');
const myButton = getElement('.btn');
const myTitle = getElement('.user-title');
const myValue = getElement('.user-value');

const allButtons = [...document.querySelectorAll('.icon')];