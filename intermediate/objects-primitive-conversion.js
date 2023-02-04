// Javascript Notes - Objects Primitive Conversion

// Example of configuring object's string and number conversion result
let playerAlfred = new Player('Alfred', 70);
log(playerAlfred);
log("Hint number")
log(+playerAlfred); // Hint number
log("Hint default ")
log(playerAlfred+'_default'); // Hint number
log("Hint String ")
log(String(playerAlfred)); // Hint number


function Player(name, score) {
    this.name = name;
    this.score = score;
    this[Symbol.toPrimitive] = function(hint) {
        log(`Hint: ${hint}`);
        if (hint == 'string') {
            return `Return string player name: ${this.name}`;
        }
        if (hint == 'number') {
            return this.score;
        }
        if (hint == 'default') {
            return -1;
        }
    }
}

// Shorter logging method
function log(message) {
    console.log(message);
}
