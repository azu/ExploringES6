// LICENSE : MIT
"use strict";
function *genFunc(){
    console.log("Start");
    yield 1; // (1)
}

let genObj = genFunc();
genObj.next();

genObj.throw(new Error("AAA Problem!"));
// catchしてないから例外が発生する