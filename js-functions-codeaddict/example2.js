// Hoisting

// You may notice that we can access the 'display' function HERE, before it has even been initialised.
// When JavaScript reads the code, our compiler physically moves the display function to the VERY top of the code.
display()

// This is where we have to be very careful! Because inside of the actual function, we are referencing variables that have NOT been hoisted up.
// moreComplex()

const firstName = 'Joey'
let lastName = 'Jordinson'
var birthPlace = 'Hawaii'

function display() {
    console.log("Hello World!");
}

function moreComplex() {
    console.log(`${firstName} ${lastName} - ${birthPlace}`);
}