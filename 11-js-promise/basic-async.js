
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
    console.log(value)
}).catch(function(error){
    console.log(error);
});

function ayncFunWithOutResolve(){
    return new Promise(function(resolve, reject){
        console.log("Second Promise start...");
        setTimeout(function(){
            console.log("Okay, we are not using resolve");
            reject("Failure!!")
        }, 1000)
    })
};

ayncFunWithOutResolve().then(function(value){
    console.log(value)
}).catch(function(error){
    console.log(error);
});

// ayncFunWithOutResolve().then(function(value){
//     console.log(value)
// }, function(error){
//     console.log(error);
// });