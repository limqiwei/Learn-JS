# Basics _[[Back to Main](./../README.md#basics)]_
Includes standard foundational concepts from output, logical constructs and functions. Core concepts can be applied across different languages generally. Covers mostly basics stuff.

# Table of Contents 
- [Basics _\[Back to Main\]_](#basics-back-to-main)
- [Table of Contents](#table-of-contents)
- [Comments](#comments)
  - [Single Line Comments](#single-line-comments)
  - [Multi Line Comments](#multi-line-comments)
- [Output](#output)
- [Data Types, Variables \& Assignment](#data-types-variables--assignment)
  - [Data Types](#data-types)
  - [Variables \& Assignment](#variables--assignment)
- [Operators and Operands](#operators-and-operands)
  - [Math Operators](#math-operators)
  - [Comparison Operator](#comparison-operator)
  - [Logical Operators](#logical-operators)
  - [Bitwise Operator (Performs operators at the bit level)](#bitwise-operator-performs-operators-at-the-bit-level)
  - [Conditional Branching Operator](#conditional-branching-operator)
- [Type Conversion](#type-conversion)
  - [Explicit Type Conversion](#explicit-type-conversion)
  - [Implicit Type Conversion](#implicit-type-conversion)
- [Logical Constructs](#logical-constructs)
  - [Logical Conditional Branching](#logical-conditional-branching)
  - [Loops](#loops)
  - [Switches](#switches)
- [Functions](#functions)
  - [Declared Functions](#declared-functions)
  - [Assigned Functions](#assigned-functions)
  - [Anonymous (Arrow) Functions](#anonymous-arrow-functions)
- [Special Behavior](#special-behavior)
  - [Equality of `null` and `undefined`](#equality-of-null-and-undefined)
  - [Automatic insertion of semi-colon `;`](#automatic-insertion-of-semi-colon-)
- [Code](#code)
  - [Links to source code in this repository](#links-to-source-code-in-this-repository)

# Comments

## Single Line Comments
Double forward slashes `//` are used for commenting code

## Multi Line Comments
A forward slash with an asterik `/*` indicates the start of a multi-line comment. Likewise, end of a multi-line comment comment with `*/`

# Output
`console.log(<variable to output>)` is used to output things onto the console. This console can usually be accessed in modern web browsers (Chrome/Edge/Firefox) by pressing F12 key and locating the [Console] tab.

# Data Types, Variables & Assignment

## Data Types
There are 7 primitive data types in javascript and 1 non-primitive data type

<u>Primitive Data Types</u>
- Number (Stores integers and floats)
- BigInt (Stores arbitrarily big numbers)
- Boolean
- String
- Null
- Undefined
- Symbol (For unique identifiers)

<u>Non-Primitive Data Types</u>
- Object

## Variables & Assignment
Variables are declared using `const`, `var` or `let` keywords and assigned from right to left using the `=` operator.


# Operators and Operands

## Math Operators
1. `+` (Addition)
2. `-` (Subtraction)
3. `*` (Multiplication)
4. `**` Exponentiation
5. `/` (Division)
6. `&` (Modulo/Reminder)

## Comparison Operator
1. `<` (Less than)
2. `>` (More than)
3. `<=` (Less than or equals to)
4. `>=` (More than or equals to)
5. `==` (Equals to - not strict and will auto convert some types if applicable)
6. `===` (Equals to - strict comparison, does not allow auto type conversion)

## Logical Operators
1. `||` (OR)
2. `&&` (AND)
3. `!` (NOT)

## Bitwise Operator (Performs operators at the bit level)
1. `|` (OR)
2. `&` (AND)
3. `^` (XOR)
4. `~` (NOT)
5. `<<` (Zero left shift - shift left + use zeros)
6. `>>` (Signed right shift - shift right + use left most bits)
7. `>>>` (Signed right shift - shift right + use zero)

## Conditional Branching Operator
1. `?:` (Tenary Operator)
2. `??` (Nullish coalescing operator - check if left hand side is null or not. Returns right hand side if null and left hand side itself if not null)

# Type Conversion

## Explicit Type Conversion
Using global methods provided in javascript, some data types could be converted manually.

Some global methods provided are:
- `Number()`
- `Boolean()`
- `String()`


## Implicit Type Conversion
When peforming certain action javascript sometimes behaves in a way to convert the data type to similar types before the action is executed. 

One such case would be during comparison. Comparing a string '12' and a value 2 in the case of `'12' > 2` would convert 12 first to a number before comparing number `12` and number `2`.

# Logical Constructs

## Logical Conditional Branching
This section covers the concept of `IF` and `ELSE`. This is very similar to decision making in our lives i.e. Do we eat Macdonalds or KFC? Go left or right? Sleep or play game? In programming, we would convert these into `IF-ELSE` formats.

<u>General Formats</u> 
- `IF` (condition is true)
- `IF` (condition is true)  do something `ELSE` DO something else
- `IF` (condition 1 is true)  do something `ELSE IF ` (condition 2 is true) DO something 2 `ELSE` DO something else

## Loops
When writing programs, there are times when we would like to repeat some actions, just like how we would repeat some activity in our lives (waking up, brush teeth, flushing toilet after using). Similar loops do this. 

Loops in Javascript include:

<u>For Loops</u>
  - For
  - For-In
  - For-Of

<u>While Loops</u>
  - While
  - Do-while

<u>Loop logical flow management - using `continue` and `break`</u>

Sometimes if we want to stop execution of the whole loop, we can use the `break` statement, or if we want to stop the execution of the current iteration of the loop, then we use `continue`

## Switches
Switches can be seen as the extension of if-else in the form of `if-else if-else if-else`. It provides another way to create deicison pathways and actions to take when writing programs

For switches, the matching is done strictly, which means that `12` will not match `'12'`, as compared to `12 == '12'`. 

The case matching only happens once, after matching, all the code below the matched case will be executed. Hence a `break` statement is usually inserted so as to prevent the code execution to flow to those code under other cases.

# Functions
Provides another way of abstracting codes into components so that it could be recalled as reusable components, or even temporary anonymous components.

## Declared Functions
Functions declared before the script is execution, usually globally.

## Assigned Functions
Functions that could be created on the fly and assigned to a variable, which can be called by using a parenthesis `()` after the variable name. See code for example.

## Anonymous (Arrow) Functions
Functions that does not have a name. These functions are usually generally temporarily that is meant to be executed onces

# Special Behavior
Javascript has some quirks that developers should be aware of.

## Equality of `null` and `undefined`
In javascript `null` and `undefined` are non-strictly equal to each other when comparing using `==` operator. However when using strict equality `===` then they are not the same.

## Automatic insertion of semi-colon `;`
In javascripts, semicolons are inserted automatically according to ECMAScripts Specificaiton. However this does not happen all the time (see code).

This means that some script code may fail to execute or behavior in a way that is unintended, leading to bugs.

# Code
## Links to source code in this repository
- [Comments](./comments.js)
- [Ouput](./output.js)
- [Data Types, Variables \& Assignment](./data-types.js)
- [Operators and Operands](./operators-and-operands.js)
- [Type Conversion](./type-conversion.js)
- [Logical Constructs](./logical-constructs.js)
- [Functions](./functions.js)
- [Special Behaviors](./special-behavior.js)