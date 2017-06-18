function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(`delay ${delay} ms.......`);
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();

Promise.all([
    timerPromisefy(1),
    timerPromisefy(100),
    timerPromisefy(1000)
]).then(function (values) {
    console.log(`All Total time for it is: ${Date.now() - startDate} ms`);
    console.log(` value is:  ${values}`);  
});

Promise.race([
    timerPromisefy(1),
    timerPromisefy(100),
    timerPromisefy(1000)
]).then(function (values) {
    console.log(`Race Total time for it is: ${Date.now() - startDate} ms`);
});