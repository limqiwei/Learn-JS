// Exercise - Map to Name

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let usersToMap = [ john, pete, mary ];

let names = usersToMap.map((user) => user.name);
console.log(`Mapped names: ${names}`);