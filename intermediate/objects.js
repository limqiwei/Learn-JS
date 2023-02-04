// Javascript Notes - Objects

// Declaring an simple object
let person = {
    name: 'Lim Qi Wei',
    gender: 'male',
    age: 24
}

// Accessing objects
log(`
== Accessing Objects ==
Name : ${person.name}
Gender : ${person.gender}
Age : ${person.age}
=================
`)


// Creating constructor
/*
Conventions: Capitalize function. 
Construct is just used for creating objects, 
should not use for other things.
*/
function Person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    // No need to return but will auto return current object.

    /*
    However if explicitly return object,
    then that object wil lbe return instead.
    Primitives will be ignored */

    // Uncomment to try 
    // return {
    //     name: 'Fake Name',
    //     gender: 'male',
    //     age: 24,
    // }

    // Assigning a function to a property is also available.
    this.greet = function () {
        return `Hi my name is ${this.name}! Nice to meet you`
    };

}

let constructedPerson = new Person('Kiwi Lim', 'male', 24)
// Accessing objects
log(`
== Accessing Objects ==
Name : ${constructedPerson.name}
Gender : ${constructedPerson.gender}
Age : ${constructedPerson.age}
Greeting: ${constructedPerson.greet()}
=================
`)

// Trick to use `new` keyword
function Animal(name, noise) {
    if (!new.target) {
        // Check if new keyword is used, if not then call with new for it
        return new Animal(name, noise)
    }

    this.name = name;
    this.noise = noise;
    // Using arrow functions
    this.makeNoise = () => {
        return `${this.name} ${this.noise}!`;
    }
}
let nicoCat = Animal('Nico', 'meows');
let anotherNicoCat = nicoCat;
log(`Compare copy nico referenced: ${nicoCat == anotherNicoCat}`)
log(nicoCat.makeNoise());
// Object Cloning - Object assign.
let clonedNico = Object.assign({}, nicoCat);
log(`
== Accessing Cloned Nico Object ==
Name : ${clonedNico.name}
Greeting: ${clonedNico.makeNoise()}
Comparing with Original Object ${clonedNico == nicoCat}
=================
`)

// Object Cloning - structuredCloning
// Need to delete greet function as structured clone cannot clone functions
let anotherConstructedPerson = constructedPerson;
log(`Compare copy constructed referenced: ${anotherConstructedPerson == constructedPerson}`)

delete constructedPerson.greet; 
let clonedConstructedPerson = structuredClone(constructedPerson);

log(`
== Accessing Cloned Constructed Person Object ==
Name : ${clonedConstructedPerson.name}
Gender : ${clonedConstructedPerson.gender}
Age : ${clonedConstructedPerson.age}
Comparing with Original Object ${clonedConstructedPerson == constructedPerson}
=================
`)

// Comparing Symbols
log(`Compared Symbols: ${Symbol('id') == Symbol('id')}`);
// Possible usage
let uniqueKey = Symbol('accessSymbol');
let uniqueKeyCannotWork = Symbol('accessSymbol');

let secretInfo = { 
    'confidentialWord': 'THISISASECRET',
    [uniqueKey] : true,
}

log("\nPassing uniqueKey")
log(accessObject(secretInfo, uniqueKey));
log("\nPassing uniqueKeyCannotWork")
log(accessObject(secretInfo, uniqueKeyCannotWork));


function accessObject(obj, key) {
    if (!(key in obj)) {
        return 'Illegal Object passed';
    }
    if (obj[key] == undefined) {
        return 'Cannot Access';
    }

    return `Success! Word: ${obj.confidentialWord}`;
}

// Example of configuring object's string and number conversion result
function Player(name, score) {
    this.name = name;
    this.score = score;
    this[Symbol.toPrimitive] = function(hint) {
        log(`Hint: ${hint}`);
        if (hint == 'string') {
            return `Return string player name: ${this.name}`;
        }
        if (hint == 'number') {
            return this.score;
        }
        if (hint == 'default') {
            return -1;
        }
    }
}
let playerAlfred = new Player('Alfred', 70);
console.log(playerAlfred);
log("Hint number")
console.log(+playerAlfred); // Hint number
log("Hint default ")
console.log(playerAlfred+'_default'); // Hint number
log("Hint String ")
console.log(String(playerAlfred)); // Hint number



function log(message) {
    console.log(message);
}
