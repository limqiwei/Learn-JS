// Javascript Notes - Logical Constructs

// IF 
console.log("== IF STATEMENT EXAMPLE ==")
let myGender = 'male'
if (myGender == 'male') {
    console.log("You are male.")
}

// IF ELSE
myGender = 'female'
console.log("== IF ELSE STATEMENT EXAMPLE ==")
if (myGender == 'male') {
    console.log("You are male.")
} else {
    console.log("You are female")
}

// IF, ELSE IF, ELSE
myGender = 'XXXX'
console.log("== IF ELSE STATEMENT EXAMPLE ==")
if (myGender == 'male') {
    console.log("You are male.")
} else if (myGender == 'female') {
    console.log("You are female")
} else {
    console.log("You are neither male nor female.")
}

// For Loops - For
console.log("== FOR LOOPS - FOR LOOP EXAMPLE ==")
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// For Loops - For Of - Iterate thorugh children in an iterable object
console.log("== FOR LOOPS - FOR OF LOOP EXAMPLE ==")
let numberTextArray = ['one','two','three']
for (numberText of numberTextArray) {
    console.log(numberText);
}

// For Loops - For In - Iterate thorugh properties (key) in an iterable object
console.log("== FOR LOOPS - FOR IN LOOP EXAMPLE ==")
let animalCollectionObject = {'cat':'chester', 'dog':'gumi', 'fox':'ranru'}
for (animalKey in animalCollectionObject) {
    console.log(`animalKey: ${animalKey} => Name of animal is ${animalCollectionObject[animalKey]}`)
}

console.log("== (EXTRA) FOR LOOPS - FOR OF WITH OBJECTS EXAMPLE ==")
// Extra - Using object values and FOR OF loop
for (value of Object.values(animalCollectionObject)) {
    console.log(value)
}
for (key of Object.keys(animalCollectionObject)) {
    console.log(key)
}



// While Loop
console.log("While Loop")
let counter = 0;
while (counter < 3) {
    console.log(counter++);
}

// While Loop - Will executte at least once even if the first iterate fails the condition check
console.log("Do-While Loop")
let counter2 = 0;
do {
    console.log(counter2++);
} while (counter2 < 0);


console.log('Loop with \'break\'');
for (letter of 'abcdefgh') {
    if (letter == 'd') {
        break;
    }
    console.log(letter);
}
    

console.log('Loop with \'continue\'');
for (letter of 'jklmno') {
    if (letter == 'm') {
        continue;
    }
    console.log(letter);
}


// Switches
console.log("Switches with breaks")
let toMatch = 'Mon'
switch (toMatch) {
    case 'Mon':
        console.log("It is Mon")
        break;
    case 'Tue':
        console.log("It is Tue")
        break;
    case 'Wed':
        console.log("It is Wed")
        break;
    case 'Thurs':
        console.log("It is Thurs")
        break;
    case 'Fri':
        console.log("It is Fri")
        break;
    case 'Sat':
        console.log("It is Sat")
        break;
    case 'Sun':
        console.log("It is Sun")
        break;
    default:
        console.log("Default case")
}

console.log("Switches with breaks - default case")
let randomWord = 'Notgonnamattch'
switch (randomWord) {
    case 'Mon':
        console.log("It is Mon")
        break;
    case 'Tue':
        console.log("It is Tue")
        break;
    case 'Wed':
        console.log("It is Wed")
        break;
    case 'Thurs':
        console.log("It is Thurs")
        break;
    case 'Fri':
        console.log("It is Fri")
        break;
    case 'Sat':
        console.log("It is Sat")
        break;
    case 'Sun':
        console.log("It is Sun")
        break;
    default:
        console.log("Default case is triggered")
}

console.log("Switches without breaks")
toMatch = 'Wed'
switch (toMatch) {
    case 'Mon':
        console.log("It is Mon")
    case 'Tue':
        console.log("It is Tue")
    case 'Wed':
        console.log("It is Wed")
    case 'Thurs':
        console.log("It is Thurs")
    case 'Fri':
        console.log("It is Fri")
    case 'Sat':
        console.log("It is Sat")
    case 'Sun':
        console.log("It is Sun")
    default:
        console.log("Default case")
}