// IIFE

const num1 = 40;
const num2 = 50;

function add() {
    console.log(`The sum is: ${num1 + num2}`);
}

add();

// The first two issues are: Global Namespace, and secondly, we are taking extra steps. Wouldn't it be great to set it up in one separate place?

(function () {
    console.log("Hello World!");
    // These variables are protected from colliding with global scope.
    const num3 = 30;
    const num4 = 40;
})();

(function (num5, num6) {
    console.log(`The sum within our IIFE is: ${num5 + num6}`);
})(2, 3);

const result = (function (num7, num8) {
    return num7 + num8;
})(10, 20);

console.log(result);