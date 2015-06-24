// LICENSE : MIT
"use strict";

function* genFunc() {
    yield "first";
    yield "second";
}

for (let x of genFunc()) {
    console.log(x);
}

let arr = [...genFunc()];
console.log(arr);