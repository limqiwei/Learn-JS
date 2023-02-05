// Javascript Notes - Objects Method Chaining (Very Interesting!)


// By returning `this` keyword, we can allow method chaining
let person = {
    displacement_x: 0,
    displacement_y: 0,
    moveLeft() {
        this.displacement_x -= 1;
        return this;
    },
    
    moveRight() {
        this.displacement_x += 1;
        return this;
    },
    moveDown() {
        this.displacement_y -= 1;
        return this;
    },
    moveUp() {
        this.displacement_y += 1;
        return this;
    },
    getPosition() {
        log(`Current Position (${this.displacement_x},${this.displacement_y})`);
        return this;
    }
}


// Program
person.moveLeft() // (-1, 0)
    .moveLeft() // (-2, 0)
    .moveDown() // (-2, -1)
    .getPosition() // (-2, -1)
    .moveRight() // (-1, -1)
    .moveRight() // (0, -1)
    .moveRight() // (1, -1)
    .getPosition()
/////////////////////////////////////////////

// Shorter logging method
function log(message) {
    console.log(message);
}
