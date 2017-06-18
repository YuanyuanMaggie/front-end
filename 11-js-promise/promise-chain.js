function taskA(value) {
    console.log("Task A is here!!!!!!!");
    console.log("value now is "+ value);
    return value*2;
}
function taskB(value) {
    console.log("Task B is here!!!!!!!");
    console.log("value now is "+ value);
    throw new Error("throw Error @ Task B--------I don't want Task C to do anything-------")
}
function taskC() {
    console.log("Task C");// It won't be called 
}
function onRejected(error) {
    console.log(error);// => "throw Error @ Task A"
}
function finalTask() {
    console.log("------I am the Final Task-------");
}

var promise = Promise.resolve(2);
promise
    .then(taskA)
    .then(taskB)
    .then(taskC)
    .catch(onRejected)
    .then(finalTask);