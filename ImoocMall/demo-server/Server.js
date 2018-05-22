let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs'); //fs模块 即文件系统模块，通过 fs 去读文件系统

let server = http.createServer((req, res) => {
    
    let pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            res.writeHead(404,{
                'Content-Type' : 'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.write(data.toString());
        };

        res.end();
    });

});

server.listen(3000, '127.0.0.1', function () {

    console.log('服务器已经运行，请打开浏览器，输入 http://127.0.0.1:3000 来进行访问！')

});

//可以通过 Server.js 搭建一个自己的服务器，但是这个服务器是访问静态的页面