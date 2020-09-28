const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
};

const fileName = 'index.html';

http.createServer(function (request,response) {
    let postData = null;
    let pathName = url.parse(request.url).pathname;
    console.log('REQUEST: ', pathName);
    if (pathName === '/favicon.ico') {
        response.end();
        return;
    }
    if (pathName === '/') {
        pathName = '/index.html';
    }
    const extName = path.extname(pathName);
    console.log('EXT', extName);
    const mimeType = mimeTypes[extName];
    pathName = pathName.substring(1, pathName.length);
    if (extName === '.jpg') {
        //const img = fs.readFileSync('./' + pathName);
        const imgStream = fs.createReadStream(pathName);
        response.writeHead(200, {'content-type': mimeType})
        response.on('close', () => {
            imgStream.destroy();
        })
        imgStream.pipe(response);
        imgStream.on('readable', ()=> {
            imgStream.read();
        })
        imgStream.on('end', ()=>{
            response.end();
        })
    } else {
        // fs.readFile(pathName, 'utf8', function (err,data) {
        //     if (err) {
        //         console.log('ERROR WHILE OPENING ', pathName);
        //         response.end('ERROR');
        //     } else {
        //         console.log('HTTP WORKS!');
        //         response.writeHead(200,{'content-type': mimeTypes[path.extname(pathName)]})
        //         response.end(data);
        //     }
        // })

        const stream = fs.createReadStream(pathName, {encoding: 'utf8'});
        response.on('close', () =>{
            console.log('RESPONSE CLOSE');
            stream.destroy();
        })
        stream.pipe(response);
        stream.on('readable', () => {
            console.log('SEND UTF');
            stream.read();
            // stream.pipe(response);
            // const data = stream.read();
            // console.log('DATA', data);
            // if (data) {
            //     response.write(data);
            // } else {
            //     console.log('STREAM CLOSE');
            //     stream.close();
            // }
        });
        stream.on('end', ()=>{
            console.log('STREAM END. RESPONSE END');
            response.end();
        })
    }
    // response.writeHead(200,{'content-type': 'text/html'})
    // response.end('<h1>HELLO</h1>');
}).listen(8080);

