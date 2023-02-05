// Filter range

console.log(`Exercise => Filter Range`)
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, startInclusive, endInclusive) {
    return arr.filter( item => {
        return item >= startInclusive && item <= endInclusive;
    })
}

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
