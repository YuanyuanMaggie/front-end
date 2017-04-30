var page = require('webpage').create(),
    system = require('system'),
    fs = require('fs'),
    settings = {
        encoding: 'utf8'
    };

var dataList = [];
var result = {};
var title, link;
var keyword = '',
    url = 'https://www.baidu.com/s?wd=',
    startTime = new Date();

page.onConsoleMessage = function(msg) {
  console.log('Page message is ' + msg);
};

if(system.args.length === 1){
    console.log('Please type "phantomJs baidu.js <KEYWORDS>');
    phantom.exit();
}else{
    keyword = encodeURI(system.args[1]);
    page.open(url + keyword, settings, function(status){
        if(status !== 'success') {
            console.log("open failed!");
            result.code = 0;
            result.msg = "fail!";
            console.log(JSON.stringify(result));
            phantom.exit();
        } else if (page.loadingProgress >= 100) {
            console.log("open successfully!");
            console.log("Working on it...");
            page.includeJs('http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js', function() {
                var number = page.evaluate(function() {
                    return $('.result').length;
                });
                
                var i = 1;
                while (i <= number) {
                    var link = page.evaluate(function(index) {
                        return $('#' + index + ' .f13>a.c-showurl').text();
                    }, i)

                    var title = page.evaluate(function(index) {
                        return $('#' + index + '>h3').text();
                    }, i);

                    var info = page.evaluate(function(index) {
                        return $('#' + index + ' .c-abstract').text();
                    }, i);

                    dataList.push({
                        'title': title,
                        'info': info,
                        'link': link
                    });
                    i++;
                }
                    
                  
                result.code = 1;
                result.msg = 'Success finished!';
                result.word = keyword;
                result.dataList = dataList;
                var endTime = new Date();
                var t = endTime - startTime + 'ms';
                result.time = t;
                
                var output = JSON.stringify(result, undefined, 4)
                console.log("Final Data is：");
                console.log(output);
                
                //write into a file
                var file = fs.open(keyword+'.json','w');
                file.write(output);
                file.close();

                //save the search result to be jpeg
                // page.render(keyword+'.png')
                page.render(keyword+'.jpeg', {format: 'jpeg', quality: '100'});
                phantom.exit();
            })
        } 
    })
}
