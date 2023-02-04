// Javascript Notes - Objects Cloning


log(`Cloing Object Example`)

let nicoCat = Animal('Nico', 'white');
log(`
== Accessing Original Nico Object ==
Name : ${nicoCat.name}
Color : ${nicoCat.color}
=================
`)

log('Copying by reference only.')
let anotherNicoCat = nicoCat;
log(`
== Accessing anotherNicoCat Object ==
Name : ${anotherNicoCat.name}
Color : ${anotherNicoCat.color}
=================
`)

log(`Compare nicoCat and anotherNicoCat. Are they the same currently? => ${nicoCat == anotherNicoCat}`)

// Object Cloning - Object assign.
log('Cloning by Object.assign() method')
let clonedNico = Object.assign({}, nicoCat);
log(`
== Accessing Cloned Nico Object ==
Name : ${clonedNico.name}
Color : ${clonedNico.color}
Comparing clonedNico with Original Nico Object. Are they the same? => ${clonedNico == nicoCat}
=================
`)


log(`
Similarly... clone by structuredClone
`)

// Object Cloning - Object assign.
log('Cloning by structuredClone() method')
let structuredClonedNico = structuredClone(nicoCat);
log(`
== Accessing Cloned Nico Object ==
Name : ${structuredClonedNico.name}
Color : ${structuredClonedNico.color}
Comparing structuredClonedNico with Original Nico Object. Are they the same? => ${structuredClonedNico == nicoCat}
=================
`)

// Function from object-constructor.
// makeNoise() is removed as cloning cannot copy functions.
function Animal(name, color) {
    if (!new.target) {
        return new Animal(name, color)
    }
    this.name = name;
    this.color = color;
}


// Shorter logging method
function log(message) {
    console.log(message);
}
