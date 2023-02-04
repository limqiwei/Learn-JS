// Javascript Notes - Conversion

// Conversion - String to Integer 
console.log(Number('3'))
console.log(Number('3.5'))


/* Conversion - String to Boolean 
Truthy values will be true and Falsy vales will be false

Falsey value:
null
undefined
NaN
0
""

Anything other than those above are truthy, even '0'
*/
// False Values
console.log(`Boolean value of '' - ${Boolean('')}`)
console.log(`Boolean value of null - ${Boolean(null)}`)
console.log(`Boolean value of undefined - ${Boolean(undefined)}`)
console.log(`Boolean value of NaN - ${Boolean(NaN)}`)
console.log(`Boolean value of 0 - ${Boolean(0)}`)

// Special truthy Value to note.
console.log(`Boolean value of '0' - ${Boolean('0')}`)


// Automatic Conversion during comparison - String will be converted to Integer if one of it is integer
console.log('10' > 5)