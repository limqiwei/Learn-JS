// Javascript Notes - Special Behaviors

// More will be added if I remember and discover more.

// Null and Undefined equals to each other an no one else
console.log(`Is null equal undefined? ${null==undefined}`);
console.log(`Is null equal 0?${null==0}`);
console.log(`Is undefined equal 0? ${undefined==0}`);
// But if in strict comparison then they are not equal
console.log(`Is null equal undefined strictly? ${null===undefined}`);



// Automatic insertion of semicolon do not always work

// This code below will run
console.log("First log");
[1,2].forEach((val) => console.log(val));

// This code below will not run as a semicolon is not inserted between ) and []
// Please uncomment the code to run as I commented to so other code can run.
/*
console.log("Second log")
[1,2].forEach((val) => console.log(val));
*/