// Exercise - Filter unique names for array



let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return arr.reduce((uniqueArray, currentItem) => {
        if (uniqueArray.indexOf(currentItem) == -1) uniqueArray.push(currentItem);
        return uniqueArray;
    }, [])
}

console.log( unique(strings) ); // Hare, Krishna, :-O
