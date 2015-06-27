// LICENSE : MIT
"use strict";
function *callee() {
    try {
        yield "b";
        yield "c";
    } finally {
        console.log("finally callee");
    }
}

function *caller() {
    try {
        yield "a";
        yield callee();
        yield "d";
    } catch (e) {
        console.log("[calller] " + e);
    }
}

let genObj = caller();
genObj.next();// => a
genObj.next();// => b
genObj.throw(new Error("xxxx"));



