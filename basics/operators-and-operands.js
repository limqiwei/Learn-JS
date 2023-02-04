// Javascript Notes - Operators and Operands

/* Operators 

Math Operators
1. + (Addition)
2. - (Subtraction)
3. * (Multiplication)
4. ** Exponentiation
5. / (Division)
6. & (Modulo/Reminder)

Comparison Operator
1. < (Less than)
2. > (More than)
3. <= (Less than or equals to)
4. >= (More than or equals to)
5. == (Equals to - not strict and will auto convert some types if applicable)
6. === (Equals to - strict comparison, does not allow auto type conversion)

Logical Operators
1. || (OR)
2. && (AND)
3. ! (NOT)

Bitwise Operator (Performs operators at the bit level)
1. | (OR)
2. & (AND)
3. ^ (XOR)
4. ~ (NOT)
5. << (Zero left shift - shift left + use zeros)
6. >> (Signed right shift - shift right + use left most bits)
7. >>> (Signed right shift - shift right + use zero)
*/

// Declarations of variable for examples below
let firstNum = 15;
let secondNum = 3;
let thirdNum = 4;

// Addition
console.log(`${firstNum}+${secondNum}=${firstNum+secondNum}`);

// Subtraction
console.log(`${firstNum}-${secondNum}=${firstNum-secondNum}`);

// Multiplication
console.log(`${firstNum}*${secondNum}=${firstNum*secondNum}`);

// Exponentiation
console.log(`${thirdNum}**${secondNum}=${thirdNum**secondNum}`);

// Division
console.log(`${firstNum}/${secondNum}=${firstNum/secondNum}`);
console.log(`${firstNum}/${thirdNum}=${firstNum/thirdNum}`);

// Modulo / Remainder
console.log(`${firstNum}%${thirdNum}=${firstNum%thirdNum}`);

// Explore the rest yourself.