"use strict";
function *genFunc() {
    try {
        console.log("started");
        yield; //*!
    } catch (error) {
        console.log("Caught:" + error);
    }
}
let genObj = genFunc();
genObj.next();
var res = genObj.throw(new Error("problem"));// => *!
console.log(res);// value: undefined