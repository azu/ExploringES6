// LICENSE : MIT
"use strict";
var createReadStream = require("fs").createReadStream;
var coroutine = require("./lib/coroutine");
function readFile(fileName, target) {
    let readStream = createReadStream(fileName, {
        encoding: "utf8",
        bufferSize: 1024
    });
    readStream.on("data", function (buffer) {
        let str = buffer.toString("utf8");
        target.next(str);
    });
    readStream.on("end", function () {
        target.return();
    })
}


const splitLines = coroutine(function *(target) {
    let previous = "";
    try {
        while (true) {
            previous += yield;
            let eoIndex;
            while ((eoIndex = previous.indexOf("\n")) >= 0) {
                let line = previous.slice(0, eoIndex);
                target.next(line);
                previous = previous.slice(eoIndex + 1);
            }
        }
    } catch(e){console.log(e.stack)}finally {
        if (previous.length > 0) {
            target.next(previous);
        }
        target.return();
    }
});

const numberLines = coroutine(function *(target) {
    try {
        for (let lineNo = 0;; lineNo++) {
            let line = yield;
            target.next(`${lineNo}: ${line}`);
        }
    } catch(e){console.log(e.stack)} finally {
        target.return();
    }
});

const printLines = coroutine(function *() {
    while (true) {
        let line = yield;
        console.log(line);
    }
});

readFile(__dirname + "/21.4.5.1.js", splitLines(numberLines(printLines())));