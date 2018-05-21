//如果底层服务是在别的服务器上搭建的，node.js 需要去调用其他的服务，因此把这种方式称之为客户端（相对而言）
//调用者称之为客户端，被调用者称之为服务端
//以下模拟调用接口
let https = require('https');
https.get('https://www.imooc.com/index/getstarlist',function(res){
    let data = '';
    res.on('data',function(chunk){
        data += chunk;
    });

    res.on('end',function(){
        let result = JSON.parse(data);
        console.log('result '+result.msg)
    });
});

// 原视频中访问网址是 'http://www.imooc.com/u/card' ，使用的是 http 模块。
// 目前访问的 XHR 只存在https （Request URL: https://www.imooc.com/lecturer/ajaxrecteacher），
// 所以个人引用的是https模块