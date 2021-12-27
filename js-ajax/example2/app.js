// Setting up AJAX.


const myButton = document.querySelector(".btn");
const url = './api/people.json'

myButton.addEventListener('click', () => {
    getData(url)
});

function getData(url) {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const apiResponse = JSON.parse(xhr.responseText);
            const displayData = apiResponse.map((item) => {
                return `<p>${item.firstName}</p>`
            }).join("")
            console.log(apiResponse);
            console.log(displayData);
            const myElement = document.createElement('div');
            myElement.innerHTML = displayData;
            document.body.appendChild(myElement);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
                readyState: xhr.readyState,
            });
        }
    };
    
    xhr.send();
}
