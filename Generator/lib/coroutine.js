// LICENSE : MIT
"use strict";
function coroutine(generatorFunction) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var genObj = generatorFunction(arguments);
        genObj.next(); // first next
        return genObj;
    };
}

module.exports = coroutine;