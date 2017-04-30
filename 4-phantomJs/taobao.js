// get info from taobao

var webPage = require('webpage');
var page = webPage.create();
var pageTb = webPage.create();

var tbUrl = "https://item.taobao.com/item.htm?id=520115087331";

page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36";

pageTb.open(tbUrl, function(status) {
    console.log("get from " + tbUrl);
    if(status !== 'success') {
        console.log("open failed!");
        phantom.exit();
     } else if(pageTb.loadingProgress >= 100){
        console.log("start working ...")
        var rst = pageTb.evaluate(function () {
            console.log('get the rst...')
            return document.getElementById("J_SellCounter").innerText;
        });
        console.log("sell count is"+rst);
        pageTb.render("taobao.png");
        phantom.exit();
    }
});
