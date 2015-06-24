// LICENSE : MIT
"use strict";
function* genFunc() {
    console.log("first");
    yield null;
    console.log("second");
}
// iterator (data producer)
// observers (data consumers)
var genObj = genFunc();
genObj.next();
genObj.next();
console.log(genObj.next());