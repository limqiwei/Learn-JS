// Exercise - Sort User by Age

// Expected Output: [john, mary, pete]

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(`Before sorting:`);
console.log(arr)
sortByAge(arr);
console.log(`After sorting:`);
console.log(arr)

function sortByAge(arr) {
    arr.sort((a,b) => a.age - b.age)
}