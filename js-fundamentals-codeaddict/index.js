// Helper Functions

// document.write("Hello World");
// alert("Alert!");
// console.log("Hello Console!");

// String Concatenation

const firstName = "Ringo";
const lastName = "Starr";
// const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName}`;

console.log("Your full name is: " + fullName);

const website = 'wikipedia';
const url = `https://www.${website}.com`;
// const url = 'https://www.' + website + '.com';

console.log(url);

// Functional Expressions and Parsing Integers as strings.

var sum = function (numberOne, numberTwo) {
        return parseInt(numberOne) + parseInt(numberTwo);
    };

console.log(sum(3, '5'));

// Advanced Objects

var person = {
    firstName: "James",
    lastName: "Bond",
    age: 30,
    favouriteGreeting() {
        // console.log("The name is " + person.lastName + "... " + person.firstName + " " + person.lastName);
        console.log(`The name is ${person.lastName}... ${person.firstName} ${person.lastName}`);

    }
};

person.favouriteGreeting()

// Conditionals

const doorCode = 3405;
let dailyNumber = 35;

if (doorCode === 3405 && dailyNumber == 35) {
    console.log("Success! You have been let into the door!")

} else if (doorCode === 3405 || dailyNumber == 35) {
    console.log("Error. door code or daily number is wrong.")
} else {
    console.log("Error, door code and daily number is wrong.")

};

// Switch Statements

const diceRoll = 5;

switch (diceRoll) {
    case 1:
        // console.log("You got a One.")
        
        break;

    case 2:
        // console.log("You got a Two.")
        console.log(`You got a ${diceRoll}!`)
        break;
    
    case 3:
        // console.log("You got a Three.")
        console.log(`You got a ${diceRoll}!`)
        break;

    case 4:
        // console.log("You got a Four.")
        console.log(`You got a ${diceRoll}!`)
        break;

    case 5:
        // console.log("You got a Five.")
        console.log(`You got a ${diceRoll}!`)
        break;

    case 6:
        // console.log("You got a Six.")
        console.log(`You got a ${diceRoll}!`)
        break;

    default:
        console.log("You did not roll the dice!")
        break;
};

// While Loops

let bankBalance = 10;

while (bankBalance > 0) {
    bankBalance --;
    // console.log("You went to the shop and now you have £" + bankBalance + " left.");
    console.log(`You went to the shop and now you have £${bankBalance} left.`);

};

// Do While Loops

do {
    console.log('Adding Money to your bank balance...');
    bankBalance ++;
    // console.log('Your bank balance is now £' + bankBalance);
    console.log(`Your bank balance is now £${bankBalance}`);


} while (bankBalance < 2);

// For Loops

for (let i = 0; i <= 5; i++) {
    // console.log("Our number is " + i);
    console.log(`Our number is ${i}`);
};


// Arrays and For Loops.

const familyFirstNamesArray = ["Gomez", "Morticia", "Pugsley", "Wednesday", "Fester", "Grandmama", "Lurch", "Thing", "Itt"];
const familyLastName = "Addams";
let familyFullNames = [];

for (let i = 0; i < familyFirstNamesArray.length; i ++) {
    familyFullNames.push(`${familyFirstNamesArray[i]} ${familyLastName}`);
};

console.log(familyFullNames);

// Functions, Returns, If, Arrays, and For Loops.

const electricityCostsOver3Months = [20, 30, 40];
const foodCostsOver3Months = [20, 50, 70];

function calculateTotalCosts(costArray) {
    let totalCost = 0;
    for (let i = 0; i < costArray.length; i ++) {
        totalCost += parseInt(costArray[i]);
    };
    if (totalCost > 100) {
        console.log("Whoa! You are spending way too much!")
    } else {
        console.log("You're good with this.")
    }
    return totalCost;
};

let billTotals = {
    foodTotal: calculateTotalCosts(foodCostsOver3Months),
    electricityTotal: calculateTotalCosts(electricityCostsOver3Months)
};
console.log(billTotals);

// The Ternary Operator

let weightExample = 500;

weightExample <= 400 ? console.log(`A weight of ${weightExample} will go over the bridge.`) : console.log(`Danger! A weight of ${weightExample} will break the bridge!`);

// Higher Order & Callback Functions

function callbackFunctionExample1(userName) {
    return `Good Morning ${userName}!`
}

function callbackFunctionExample2(userName) {
    return `Good Afternoon ${userName}!`
}

function callbackFunctionExample3(userName) {
    return `Good Evening ${userName}!`
}

function higherOrderExample(userName, callbackGreeting) {
    const myName = 'Josh';
    console.log(`${callbackGreeting(userName)} My name is ${myName}.`)
}

higherOrderExample("Bob", callbackFunctionExample2);

// // Array Methods

const arrayExample = [
    {employeeName: 'Bob', employeeAge: 20, employeePosition: 'Front End Developer', employeeID: 1, employeeSalary: 400}, 
    {employeeName: 'Peter', employeeAge: 25, employeePosition: 'Designer', employeeID: 2, employeeSalary: 250}, 
    {employeeName: 'Sally', employeeAge: 30, employeePosition: 'Boss', employeeID: 3, employeeSalary: 800}
];

// forEach

console.log("\nTesting forEach Array Method.")

function showEmployeeName(employee){
    console.log(employee.employeeName.toUpperCase());
}

arrayExample.forEach(showEmployeeName)

arrayExample.forEach(function(employee) {
    console.log(employee.employeeName.toLowerCase())
})

// Map

console.log("\nTesting Map Array Method...")

let employeeAges = arrayExample.map(function(employee) {
    return employee.employeeAge;
});

console.log(employeeAges);

let mapArrayExample = arrayExample.map(function(employee) {
    return {employeeNameUpperCase: employee.employeeName.toUpperCase(), employeeAge10YearsAgo: employee.employeeAge - 10};
});

console.log(mapArrayExample);

let mapArrayExample2 = arrayExample.map(function(employee) {
    return `<h1>${employee.employeeName}</h1>`;
});

console.log(mapArrayExample2);

// Filter

console.log('\nTesting Filter Array Method...')

const youngEmployees = arrayExample.filter(function(employee) {
    return employee.employeeAge <= 25;
})

console.log(youngEmployees);

const designerEmployees = arrayExample.filter(function(employee){
    return employee.employeePosition.toLowerCase() === 'designer';
})

console.log(designerEmployees);

// Find

console.log('\nTesting Find Array Method...')

const findID3 = arrayExample.find(function(employee) {
    return employee.employeeID === 3;
})

console.log(findID3)

// Reduce

console.log('\nTesting Reduce Array Method...')

const totalSalaryPerDay = arrayExample.reduce(function(acc, currItem){
    // console.log(`Current Salary: £${currItem.employeeSalary}`)
    acc += currItem.employeeSalary
    // console.log(`Total Salary after Addition: £${acc}`);

    return acc;
}, 0);

console.log(totalSalaryPerDay);

// Basic Maths

const MathExampleVariable = 4.563923;

const mathExample1 = Math.floor(MathExampleVariable);
console.log(`The floor is: ${mathExample1}`);

const mathExample2 = Math.ceil(MathExampleVariable);
console.log(`The ceiling is: ${mathExample2}`);

const mathExample3 = Math.sqrt(MathExampleVariable);
console.log(`The Square Root is: ${mathExample3}`);

console.log(`PI is: ${Math.PI}`);

console.log(`Max of items in this array is: ${Math.max(...[2, 6, 8])}`)  // This stupidly doesn't take an array, physically need to put three dots before it.
console.log(`Min of items in this array is: ${Math.min(...[2, 6, 8])}`)  // This stupidly doesn't take an array, physically need to put three dots before it.

console.log(`A random number is: ${Math.random()}`)

console.log(`A random number between 1 and 10 is: ${Math.ceil(Math.random() * 10)}`)

// Dates

const dateExampleMonthsArray = [
    'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
]

const dateExampleDaysArray = [
    'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'
]

// const dateExample1 = new Date();
const dateExample1 = new Date('3/12/2020');

console.log(dateExample1);
console.log(`The Year is: ${dateExample1.getFullYear()}`)
console.log(`The Month is: ${dateExampleMonthsArray[dateExample1.getMonth()]}`)
console.log(`The Day is: ${dateExampleDaysArray[dateExample1.getDay()]}`)