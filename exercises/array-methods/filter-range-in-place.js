// Exercise - Filter range in place
console.log(`Exercise => Filter Range in place`)
let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log( arr2 ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    filtered = arr.filter(item => (item >= a && item <= b));
    arr.length = 0; // Clean up array
    for (item of filtered) {
        arr.push(item);
    }
}