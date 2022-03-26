function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const beforeAll = () => "Inline function to be returned";
    return beforeAll;
}

function returnsAnAnonymousFunction() {
    return function () { return "function returned"};
}