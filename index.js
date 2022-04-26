function receivesAFunction(callBack) {
    return callBack();
}
receivesAFunction(spies);

function returnsANamedFunction() {
    return function fn() {
        console.log("hi");
    }
}
returnsANamedFunction(fn);

function returnsAnAnonymousFunction() {
    return function() {
        console.log("bye");
    }
}
returnsAnAnonymousFunction();