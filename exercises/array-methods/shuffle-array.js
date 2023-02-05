// Exercise Shuffle an array

// More reading:  Fisher-Yates algorithm

// Every time shuffle is called the array is reshuffled.
// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// console.log(arr);


let count = {
    // '123': 0,
    // '132': 0,
    // '213': 0,
    // '231': 0,
    // '321': 0,
    // '312': 0
};


for (let i = 0; i < 10000000; i++) {
    let array = [1, 2, 3, 4];
    shuffle(array);
    (count[array.join('')] ? count[array.join('')]++ : (count[array.join('')] = 1))
}
  
// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
  

function shuffle(arr) {
    let shuffledArray = []; 
    let arrLength = arr.length;
    while (arrLength) {
        let randomIndexToPop = Math.floor(Math.random()*arrLength);
        arr.push(arr.splice(randomIndexToPop, 1)[0])
        arrLength--;
    }
}


