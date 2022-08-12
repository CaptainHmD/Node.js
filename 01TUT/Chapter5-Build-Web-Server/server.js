//! imports for server
const http = require('http'); // express
const express = require('express')
const app = express(); // app = server
const path = require('path')
const PORT = process.env.PORT||3500;

app.get('^/$|index(.html)?',(req,res)=>{ // create    ^start with      $end with    | or     ()? inside the () is optional 

    // res.send('Hello')
    res.sendFile(path.join(__dirname,'views','index.html'))
    // console.log(req.headers);
})


app.get('/new-page',(req,res)=>{ // create

    // res.send('Hello')
    res.sendFile(path.join(__dirname,'views','new-page.html'))

    // console.log(req.headers);
})


app.listen(PORT,()=>{
    console.log('server running port: ',PORT);
})





























// regular server
// const path = require('path');
// const fs = require('fs');
// const fsPromises= require('fs').promises;

// const EventEmitter= require('events');
// const logEvents = require('./logEvents');
// const { beTarask } = require('date-fns/locale');


// // initialize object
// const myEmitter = new EventEmitter();

// // defined port
// const PORT = process.env.PORT || 3500;
// const server = http.createServer((req,res)=>{
//     let pathc;


//     console.log(req.url, req.method);
//     console.log(res.statusCode);


// });

// server.listen(PORT,()=>{
//     console.log('Server running on port: ',PORT);

// });









// add listener for the log event
// myEmitter.on('log',(msg)=>{
//     logEvents(msg)
// });

// myEmitter.emit('log','log event hi with out c')


