//creating the simplest possible server that outputs hello world when connected
//herethe backend folder is the root of the backend service
//writting a simple server that returns a hello world
//import the built in http module into the 
const http= require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'plin/text'});
    res.end("hello world!");
});
server.listen(3000,()=>{
    console.log("successfully listening on the http://localhost:3000");
});

