#Learn JavaScript Promise by 4 examples
One of the most common and most painful part of JavaScript is the async call. Now let’s try to use ES6 Promises to make life easier. 

##Basic Idea
The basic way to use promise is the constructor. When you create a promise, you can use .then for the call back function. 

```
var promise = new Promise(function(resolve, reject));
promise.then(onFulfilled, onRejected)
```

You don’t need both resolve or reject function. 

```
new Promise(function(resolve){
    resolve(1);
});
```

Or you can use the static method, just use Promise 
```// same way here with static method
Promise.resolve(1)
```

##Start basic example
Okay. Let’s start our example now. You may need to install node first. So we can just see the result from the terminal. 
Let’s start with the `basic-async.js`

```
function ayncFunWithResolve(){
   return new Promise(function(resolve, reject){
   console.log("First Promise start...");
   setTimeout(function(){
     console.log("This one is using resolve");
     resolve('Success!')
   }, 1000)
})
};
ayncFunWithResolve().then(function(value){
   console.log(value);
}).catch(function(error){
   console.log(error);
});
```

In this example, we use the resolve function, so the callback value is passed from the resolve and the error one won’t work. How can we let the error function work? You guess it! Right, we use reject function:

```function ayncFunWithOutResolve(){
  return new Promise(function(resolve, reject){
    console.log("Second Promise start...");
    setTimeout(function(){
        console.log("Okay, we are not using resolve");
        reject("Failure!!")
    }, 1000)
  })
};
ayncFunWithOutResolve().then(function(value){
   console.log(value);
}).catch(function(error){
   console.log(error);
});
```


The `.then(… ).catch(…)` is the same with the `.then(…,….)`:

```ayncFunWithOutResolve().then(function(value){
     console.log(value)
 }, function(error){
     console.log(error);
 });
 ```

##XHR Example
How about in the real life, how we can use the resolve and reject together? In the second example, let’s make a XMLHttpRequest. Because we use node.js, make sure you install xmlhttprequest. Create the file name xhr-async.js , and type in following code. Then node xhr-async.js . See the console log information. 

```
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function getURL(URL) {
  return new Promise(function (resolve, reject) {
   var req = new XMLHttpRequest();
   req.open('GET', URL, true);
   req.onload = function () {
     if (req.status === 200) {
       resolve(req.responseText);
     } else {
       reject(new Error(req.statusText));
     }
    };
   req.onerror = function () {
     reject(new Error(req.statusText));
   };
   req.send();
  });
 }
var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value){
    console.log('---------success!!!!-------')
    console.log(value);
  }).catch(function onRejected(error){
   console.error(error);
});
```
##Promise Chain
Now is the most useful part for the promise, you can add many callback function, to the promise chain, and use return to pass value. the .catch is for the error. Let’s see follow example in promise-chain.js 

```
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
```

In the example, we use static method Promise.resolve(2) to return a promise. the value 2 will be the param in the taskA, taskA return 4 after processing. taskB get the new value 4, and throw an error. Therefore, task C won’t do anything and .catch will print out the error message. Then the finalTask. 

##Promise all and race
How about I have many promises, I don’t need them to be called one by one? You can use all or race. The difference is Promise.all will return new promise only when all all done. But Promise.race will return new promise as long as one promise return resolve. 
```
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
```

Try to use this call and compare it with the following one:
```
Promise.race([
timerPromisefy(1),
timerPromisefy(100),
timerPromisefy(1000)
]).then(function (values) {
console.log(`Race Total time for it is: ${Date.now() - startDate} ms`);
});
```
