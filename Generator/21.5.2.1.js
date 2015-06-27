// LICENSE : MIT
"use strict";
require('isomorphic-fetch');

function co(genFunc) {
    let genObj = genFunc();

    function run(promiseResult) {
        // promiseへの引数
        let result = genObj.next(promiseResult);
        if (!result.done) {
            // promise object
            result.value.then(function (result) {
                run(result);
            }).catch(function (error) {
                genObj.throw(error);
            });
        }
    }

    run();
}

function getFile(url) {
    return fetch(url)
        .then(function (request) {
            return request.text();
        });
}

co(function* () {
    try {
        let promiseResults = yield Promise.all([  // (A)
            getFile('http://httpbin.org/get'),
            getFile('http://httpbin.org/get')
        ]);
        let croftStr = promiseResults[0];
        let bondStr = promiseResults[1];
        let croftJson = JSON.parse(croftStr);
        let bondJson = JSON.parse(bondStr);

        console.log(croftJson);
        console.log(bondJson);
    } catch (e) {
        console.log('Failure to read: ' + e);
    }
});
