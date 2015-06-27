"use strict";
function *genFunc() {
    try {
        console.log("started");
        yield 1;
    } catch (error) {
        console.log("Caught:" + error);
    }
}
let genObj = genFunc();
genObj.next();
genObj.throw(new Error("problem"));