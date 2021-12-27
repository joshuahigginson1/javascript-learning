// Most of the time, we will spend more time researching API documentation than writing code!
// https://api.chucknorris.io

const apiUrl = 'https://api.chucknorris.io/jokes/random';

const myButton = document.querySelector('.btn');
const myContent = document.querySelector('.content');
const myImg = document.querySelector('img');

myButton.addEventListener('click', () => {
    getData(apiUrl);
});

function getData(url) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            myImg.classList.add('shake-img'); // Add shake to our image.

            const apiResponse = JSON.parse(xhr.responseText);
            const {value:returnedJoke, ...rest} = apiResponse;
            // console.log(apiResponse);
            // console.log(returnedJoke);
            myContent.textContent = returnedJoke;

            // Get a random time.
            const randomNumber = Math.random() * 1000

            // Remove the image shake.
            setTimeout(() => {
                myImg.classList.remove('shake-img');
            }, randomNumber)


        } else {
            console.log({
                status: xhr.status,
                statusText: xhr.statusText,
                readyState: xhr.readyState,
            });
        }
    }
}