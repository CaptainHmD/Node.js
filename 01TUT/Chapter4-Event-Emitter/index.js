//! NPM needed
// const { format }= require('date-fns')
// const {v4: uuid}= require('uuid')

// const fs = require('fs');
// const fsPromises= require('fs').promises;
// const path = require('path')





// console.log(format(new Date(), 'yyyymmdd \t HH:mm:ss'));
// console.log(new Date());


// console.log(uuid());

const log = require('./logEvents')
const EventEmitter= require('events');
const logEvents = require('./logEvents');


// initialize object
const myEmitter = new EventEmitter();

// add listener for the log event
myEmitter.on('log',(msg)=>{
    logEvents(msg)
});

myEmitter.emit('log','log event hi with out c')


