// Modules Setup.

// We have one global namespace. 
// It is also quite hard to navigate.

const people = [
    {firstName: 'John', job: 'Developer'},
    {firstName: 'Susan', job: 'Designer'},
    {firstName: 'Anna', job: 'Boss'},
]

const myContainer = document.querySelector('.container');
const myButton = document.querySelector('.btn');

const showPeople = () => {
    const newPeople = people.map((person) => {
        console.log(person);
        const {firstName, job} = person;
        return `<p>${firstName}: <strong>${job}</strong></>`
    }).join('');
    myContainer.innerHTML = newPeople;
};

myButton.addEventListener('click', () => showPeople());