// Most of the time, we will spend more time researching API documentation than writing code!
// https://api.chucknorris.io

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const myButton = document.querySelector('.btn');
const myContent = document.querySelector('.content');
const myImg = document.querySelector('img');

myButton.addEventListener('click', () => {
    fetch(apiUrl)
        .then((fetchData) => fetchData.json())
        .then((response) => displayData(response))
        .catch((err) => console.log(err));
});


function displayData({value:returnedJoke, ...rest}) {
    myImg.classList.add('shake-img'); // Add shake to our image.

    myContent.textContent = returnedJoke;
    
    // Get a random time.
    const randomNumber = Math.random() * 1000
    
    // Remove the image shake.
    setTimeout(() => {
        myImg.classList.remove('shake-img');
    }, randomNumber)
    
    


}