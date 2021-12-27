// Getting a random photo when clicking the button.

const myButton = document.querySelector('.btn');
const myPhotoDiv = document.querySelector('.myPhotoDiv');

const workingUrl = 'https://source.unsplash.com/random/800x800/?img=1'
const fakeUrl = 'https://source.unsplash.com/'

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        // On image load...
        img.addEventListener('load', () => {
            console.log("Everything works!");
            resolve(img);
        });
        
        // On image error...
        img.addEventListener('error', () => {
            console.log("There was an error!");
            reject(new Error(`Failed to load image from source: ${url}`));
        });
        
    });
}

myButton.addEventListener('click', () => {
    loadImage(fakeUrl).then((result) => {
        myPhotoDiv.appendChild(result);
        
    }).catch((err) => {
        console.log(err);
    });
});