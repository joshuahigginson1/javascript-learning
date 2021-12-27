// Setting up AJAX.

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
const xhr = new XMLHttpRequest();

// The open method.
xhr.open('GET', './api/sample.txt');
console.log(`UNSENT: ${xhr.status}`);

// On Ready State Change.
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

// The Send Method.
xhr.send();

console.log("This is proof that this is asynchronous!");