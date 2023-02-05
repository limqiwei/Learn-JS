// Javascript Notes - Objects Constructor


// Run Program
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
////////////////////////////////////////////


/* Creating constructor

Conventions: Capitalize function. 
Construct is just used for creating objects, 
should not use for other things.

There is no need to return for constructors 
as they will auto return current object (this).

However if an object is explicitly returned, then that is the 'created' object,

Primitives returns will be ignored and the constructor will return the constructor object as intended
*/
function Person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    // Assigning a function to a property is also available.
    this.greet = function () {
        return `Hi my name is ${this.name}! Nice to meet you`
    };


    // Uncomment the below return statement to try 
    // return {
    //     name: 'Fake Name',
    //     gender: 'male',
    //     age: 24,
    //     greet: () => {
    //         return 'Fake greet function'
    //     }
    // }
}


// Detecting usage of `new` keyword and implicit insertion within constructor if needed.
function Animal(name, noise) {
    if (!new.target) {
        // Check if new keyword is used, 
        // if not then call with new for it
        return new Animal(name, noise)
    }

    this.name = name;
    this.noise = noise;
    // Using arrow functions
    this.makeNoise = () => {
        return `${this.name} ${this.noise}!`;
    }
}

// Shorter logging method
function log(message) {
    console.log(message);
}
