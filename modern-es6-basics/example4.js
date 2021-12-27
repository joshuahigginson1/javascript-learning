// Tagged Template Literals

const author = "Some Author";
const statement = "Some Statement";

// This is an example of tagging a template literal with a function.
const quote = highlight`${statement}; Written by ${author}.`

const myDiv = document.getElementById('result');

myDiv.innerHTML = quote;

// ...allArgs physically collects the REST of all of the arguments, and then puts them inside of an array.
function highlight(allText, ...allArgs ) {
    console.log({allText, allArgs});
    const awesomeText = allText.map(function(item, index){
        return `${item} <strong>${allArgs[index] || ""}</strong>`
    })
    return awesomeText.join("")
}