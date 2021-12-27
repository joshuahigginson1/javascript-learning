// Template literals.

const firstName = 'Jenna';
const lastName = "Jamieson";
const age = 25;

// Old way.
const phraseOld = "My full name is " + firstName + " " + lastName + " and my age is " + age + "!";

// Template literals.
const phraseNew = `My full name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and my age is ${age}!`;

// HTML Example.

const myObject = {
    firstName: "James",
    job: "Developer",
    hobbies: ["Surfing", "Baking", "Bowling"]
};

const myDiv = document.querySelector("#result");

myDiv.innerHTML = `
<h2>${myObject.firstName}</h2>
<p>${myObject.job}</p>
<ul>${myObject.hobbies.map(
    function(item) {
        return `<li>${item}</li>`
    }).join("")}
</ul>
`;
