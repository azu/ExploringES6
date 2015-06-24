// LICENSE : MIT
"use strict";
function coroutine(generatorFunction) {
    return function () {
        let genObj = generatorFunction(arguments);
        genObj.next(); // first next
        return genObj;
    };
}

const wrapped = coroutine(function *() {
    console.log(`First input: ${yield}`);
    return "done";
});

wrapped().next("test");
