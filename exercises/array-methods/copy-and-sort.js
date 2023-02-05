// Exercise - Copy and sort array

let arrayToCopySort = ["HTML", "JavaScript", "CSS"];

let arrayThatisCopySorted = copySorted(arrayToCopySort);

function copySorted(arr) {
    let copy = arr.slice(0);
    return copy.sort();
}

console.log( arrayThatisCopySorted ); // CSS, HTML, JavaScript
console.log( arrayToCopySort ); // HTML, JavaScript, CSS (no changes)