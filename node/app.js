const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end("hello");
})
server.listen(5000,()=>{
    console.log("server listening")
})
