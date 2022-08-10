const fs = require('fs'); // import
const path = require('path')

fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
fs.readFile('./files/starter.txt', (err, data) => { // before call back function we can put utf8 for encoding the data that we read //*! UTF-8 takes the code point for a given Unicode character and translates it into a string of binary 
    if (err) throw err;
    console.log(data);
})

// *! don`t use hardcode  on path , save the path in variable 
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
process.on('uncaughtException', err => {
    console.error(`there was in uncaught error: ${err}`)
    process.exit(1)
})

//! write files
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'content of the file', (err) => { // !no need for itf8 it`s default now
    if (err) throw err;
    console.log('write complete');
})
fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nappend test', (err) => { // !no need for itf8 it`s default now
    if (err) throw err;
    console.log('Append complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nappend2 test', (err) => { // !no need for itf8 it`s default now
        if (err) throw err;
        console.log('Append2 complete');
    })
})

//! to avoid call back hell you have to use async await 
// TODO: async await  

const fsPromises = require('fs').promises; // import
const fileOps = async() => {
    try {
        const data = await fs.promises.writeFile(path.join(__dirname, 'files', 'reply.txt'), '\nwrite test')
        console.log('avoid callback hell\n');
        console.log('write complete');
        const data2 = await fs.promises.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nappend1 test')
        console.log('append1 complete');
        const data3 = await fs.promises.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nappend2 test')
        console.log('append23 complete');
        const rename = await fs.promises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'promiseWrite.txt'))
        const newData = await fs.promises.readFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'utf8')
        console.log("new data \n\n", newData);
        // await fs.promises.unlink(path.join(__dirname,'files','promiseWrite.txt')) //! unlink will delete the file  Also no need for promises for unlink
    } catch (error) {
        console.error(err);
    }
}


fileOps();



// TODO: Taking data one by one from file

//! GOTO stream file