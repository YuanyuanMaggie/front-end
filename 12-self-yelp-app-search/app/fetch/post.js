import 'whatwg-fetch'
import 'es6-promise'

function obj2params(obj) {
    var rst = '',
        item;
    for (item in obj) {
        rst += `& ${item}= ${encodeURIComponent(obj[item])}`;
    }

    if(rst) {
        rst = rst.slice(1);
    }

    return rst;
}


export function post(url, paramObj) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:obj2params(paramObj)
    });

    return result;
}