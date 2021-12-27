// For Of loops - An alternative to forEach.

const fruits = ["Apple", "Orange", "Pear", "Banana", "Pineapple"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
    if (letter === " ") {
        continue
    } else {
        shortName += letter;
    }
}

console.log(shortName);

for (const fruit of fruits) {
    if (fruit === "Banana") {
        console.log("Bananas are disgusting.");
        break
    } else {
        console.log(fruit);
    }
}