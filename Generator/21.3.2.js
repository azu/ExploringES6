// LICENSE : MIT
"use strict";
function* genFuncWithReturn() {
    yield "a";
    yield "b";
    return "result";
}

let iterator = genFuncWithReturn();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// こっちはdone:trueのvalueはでてこない
for(let x of genFuncWithReturn()) {
    console.log(x);
}