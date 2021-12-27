// Setting up AJAX.


const myButton = document.querySelector(".btn");

myButton.addEventListener('click', () => {
    getData()
});

function getData() {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', './api/sample.txt');
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            // Create a new paragraph element.
            const myParagraph = document.createElement('p');
            myParagraph.textContent = xhr.responseText;
            document.body.appendChild(myParagraph);
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
