//! NPM needed
const { format }= require('date-fns')
const {v4: uuid}= require('uuid')

const fs = require('fs');
const fsPromises= require('fs').promises;
const path = require('path');
const { builtinModules } = require('module');



// console.log(format(new Date(), 'yyyymmdd \t HH:mm:ss'));
// console.log(new Date());


// console.log(uuid());


const logEvents = async(Message,logName) =>{

    if(!fs.existsSync(path.join(__dirname,'..','logs'))){
        await fs.promises.mkdir(path.join('..','logs'))
    }    
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${Message}`;
    console.log(logItem);

    try{
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logName),` ${logItem}\n`)
    }catch(err){
        console.log(err);
    }
}

const logger = (req,res,next)=>{ 
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqLog.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
        }
module.exports={logEvents,logger};