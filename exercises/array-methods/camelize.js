// Exercise - camel case words 

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

function camelize(str) {
    words = str.split('-');
    if (words.length == 0) {
        return '';
    }
    
    words.forEach(function(word, index, words) {
        if (index == 0) {
            return; // Do not need to capitalize first character
        }
        word = word.charAt(0).toUpperCase() + word.slice(1);
        words[index] = word;
    })
    newWord =  words.join('');
    console.log(newWord); 
    return newWord;
}
