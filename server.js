const http = require("http");

const server = http.createServer(()=>{
    console.log("ahsudah")
})


//default addres => localhost or 127.0.0.1

port = 8080;
server.listen(8080, ()=>{
    console.log(`sudah urip ${port}`)

});