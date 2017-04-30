// first test
var page = require("webpage").create();
    
var postBody = "user=username&password=password"
;

page.open("http://www.google.com", "POST", postBody, function(status){
    console.log("Status: " + status);
})