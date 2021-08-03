const express = require('express');
const server = express();

server.all('/', (req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hosting Active</p>');
    res.end();
})

function keepAlive(){
    server.listen(8080, ()=>{console.log("Server is online!")})
}

module.exports = keepAlive;