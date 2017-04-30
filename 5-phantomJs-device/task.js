var page = require('webpage').create(),
    ua = require('./device.json'),
    system = require('system'),
    fs = require('fs'),
    url = 'https://www.baidu.com/s?wd=',
    startTime = new Date(),
    device,
    keyword;

if(system.args.length <3){
    console.log("Please use the correct command: phantomJs task.js <KEYWORDS> <DEVICE>");
    phantom.exit();
} 
    keyword = encodeURI(system.args[1]) || '';
    device = system.args[2];
if (!device){
    console.log("Device name could be 'iPhone5', 'iPhone6', or 'iPad'");
    phantom.exit();
}

page.settings.userAgent = ua[device].ua;

page.vierportSize = {
    width : ua[device].width,
    height: ua[device].height
}

if (keyword) {
    console.log("opening "+ url + keyword);
    page.open(url + keyword, function(status){
        console.log("start...")
        if(status!== 'success'){
            console.log("it failed!!");
            phantom.exit();
        }else if(page.loadingProgress === 100) {
            console.log("Open the page...");
            page.includeJs('http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js',
                function() {
                    console.log("get the jquery library")
                    var result = page.evaluate(function() {
                        var dataList = [];
                        console.log("scratch the page...");
                        $('.result').each(function() {
                            dataList.push({
                                'title': $(this).find('h3')
                                    .text(),
                                'link': $(this).find(
                                    'a.c-showurl').text(),
                                'info': $(this).find(
                                    '.c-abstract').text()
                            });
                        });

                        return {
                            'code': 1,
                            'msg': '抓取成功',
                            'dataList': dataList,
                        }

                    });
                    result.code = 1;
                    result.msg = 'Success finished!';
                    result.word = keyword;
                    result.dataList = dataList;
                    var endTime = new Date();
                    var t = endTime - startTime + 'ms';
                    result.time = t;
                    result.device = device;
                    
                    
                    console.log("Finished Successfully!!!");
                    var output = JSON.stringify(result, undefined, 4)
                    console.log("Final Data is：");
                    console.log(output);
                    // write into a file
                    var file = fs.open(keyword+'.json','w');
                    file.write(output);
                    file.close();
                    page.render(keword+'-'+device+'.png');
                    phantom.exit();
                }
            )

        }
    })
}

//打开页面异常处理
page.onError=function(msg,trace){
    var msgStack=['Error: '+msg];

    if(trace && trace.length){
        msgStack.push('TRACE:');
        trace.forEach(function(t){
            msgStack.push('->'+t.file+': '+t.line+(t.function?'in function '+t.function:''));
        });
    }

    console.log(msgStack.join('\n'));
    phantom.exit();
}