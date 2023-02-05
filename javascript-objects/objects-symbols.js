// Javascript Notes - Objects Symbols


// Comparing Symbols
log(`Compared Symbols: ${Symbol('id') == Symbol('id')}`);
// Possible usage
let uniqueKey = Symbol('accessSymbol');
let uniqueKeyCannotWork = Symbol('accessSymbol');

let secretInfo = { 
    'confidentialWord': 'THISISASECRET',
    [uniqueKey] : true,
}

log("\nPassing uniqueKey")
log(accessObject(secretInfo, uniqueKey));
log("\nPassing uniqueKeyCannotWork")
log(accessObject(secretInfo, uniqueKeyCannotWork));


function accessObject(obj, key) {
    if (!(key in obj)) {
        return 'Illegal Object passed';
    }
    if (obj[key] == undefined) {
        return 'Cannot Access';
    }

    return `Success! Word: ${obj.confidentialWord}`;
}


// Shorter logging method
function log(message) {
    console.log(message);
}
