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

let arr = ["a", "b", "c", "d", "e"];
for (let x  of take(2, arr)) {
    console.log(x);
}