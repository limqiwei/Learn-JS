// Javascript Notes - Functions

// Declaration of global functions
function log(message) {
    console.log(message)
}

// Using functions
log('console log without shorter function method :)');

// Assigning functions
let logGreeting = function() {
    console.log("Hi there! Hope you are having a nice day.")
}

console.log(logGreeting); // Will display it as function but not call it
// Calling assigned function to variable
logGreeting();

// Anonymous / Arrow Functions
let logTrivia = () => {
    console.log("Do you know that milk dissolves chilli (not wasabi).")
}
logTrivia();

let logSum = (a,b) => {
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
logSum(3,23);