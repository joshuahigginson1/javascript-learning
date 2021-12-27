// Selecting Elements using Tag Names.

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'blue';
console.log(headings.length);

const listItems = document.getElementsByTagName('li');

const betterItems = [...listItems];

betterItems.forEach(function (listItem) {
    listItem.style.color = 'green';
})

console.log(listItems); // Returns Node List.
console.log(betterItems); // Returns JavaScript Array.

// Selecting Elements using Class Names.

const specialItems = [...document.getElementsByClassName('Special')];
specialItems.map(function(item){
    item.style.color = "gold";
    item.textContent = item.textContent.toUpperCase();
})
console.log(specialItems);

// Selecting Elements using Query Selector.

const ourList = document.querySelector('#Result');
ourList.style.backgroundColor = 'lightblue';

const lastItem = document.querySelector('.Last');
lastItem.style.color = "black";
// console.dir(lastItem);

const lastItemExample2 = document.querySelector('li:last-child');
console.log(lastItemExample2);

const specialListQuerySelector = document.querySelectorAll('.Special');
console.log(specialListQuerySelector);

specialListQuerySelector.forEach(function(specialItem) {
    specialItem.style.fontSize = '50px';
})