let myInterval = undefined;

function initCallback() {
    greeting("Go Academy", function (name) {
        console.log("I'm a call back function..., ", name);
        clearInterval(myInterval);
        doSomethingElse("Bob..");
    });
}

function greeting(name, cbFunc) {

    console.log('Hello ' + name);
    //callback will call a function which is passed as a parameter..
    //cbFunc(name);
    myInterval = setInterval(cbFunc, 1000);

}

function doSomethingElse(name) {
    console.log("I am doing something else with ", name);
}
