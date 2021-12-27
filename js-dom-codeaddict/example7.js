// EVENT LISTENERS.

const button = document.querySelector('.btn');
const ourHeading = document.querySelector('h1');
const ourParagraph = document.querySelector('p');

function changeParagraphColours() {
    let hasClassVariable = ourParagraph.classList.contains('pink');
    if (hasClassVariable) {
        ourParagraph.classList.remove('pink');
    } else {
        ourParagraph.classList.add('pink');
    }
};

button.addEventListener('click', function() {
    console.log("Hey! You clicked me!");
    ourHeading.classList.toggle('red');  // Saves us from having to write an if function.
});

ourParagraph.addEventListener('mouseover', changeParagraphColours);