// LICENSE : MIT
"use strict";
function * take(n, iterable) {
    for (let x of iterable) {
        if (n <= 0) {
            return;
        }
        n--;
        yield x;
    }
}
function* naturalNumbers() {
    for (let n = 0; ; n++) {
        yield n;
    }
}

for (let x of take(3, naturalNumbers())) {
    console.log(x);
}

/// = > non-generate

function NNaturalNumbers() {
    let n = 0;
    return {
        [Symbol.iterator](){
            return this;
        },
        next(){
            return {value: n++};
        }
    }
}

for (let x of take(3, NNaturalNumbers())) {
    console.log(x);
}
