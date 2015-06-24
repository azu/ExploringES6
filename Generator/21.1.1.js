// LICENSE : MIT
"use strict";
// The asterisk after `function` means that
// `objectEntries` is a generator
function* objectEntries(obj) {
    let propKeys = Object.keys(obj);
    for (let propKey of propKeys) {
        // `yield` returns a value and then pauses
        // the generator. Later, execution continues
        // where it was previously paused.
        yield [propKey, obj[propKey]];
    }
}

let jane = {first: 'Jane', last: 'Doe'};
for (let entry of objectEntries(jane)) {
    let key = entry[0];
    let value = entry[1];
    console.log(`${key}: ${value}`);
}
// Output:
// first: Jane
// last: Doe