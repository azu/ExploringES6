// LICENSE : MIT
"use strict";
function* genFunc() {
    try {
        console.log("start");
        yield;
    } finally {
        console.log("exit");
    }
}
let genObj = genFunc();
genObj.next();
genObj.return("result");