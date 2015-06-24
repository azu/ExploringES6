// LICENSE : MIT
"use strict";

// 消費者 = observer
function * dataConsumer() {
    console.log("start");
    console.log(`1 ${yield}`);
    console.log(`2 ${yield}`);
    return "res";
}
console.log("=====");
let genObj = dataConsumer();
genObj.next();
genObj.next("test");
genObj.next("cccc");
console.log("=====");
