// Exercise - Sort in decreasing order

let toSortDecreasing = [5, 2, 1, -10, 8];

function compareSortDescending(a,b) {
    console.log(`${a} and ${b}`)
    if (a > b) {
        return -1;
    }
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return 1;
    }
}

let sortedDescreasingArray = toSortDecreasing.sort(compareSortDescending)
console.log( sortedDescreasingArray ); // 8, 5, 2, 1, -10
