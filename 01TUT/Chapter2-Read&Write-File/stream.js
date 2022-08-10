const fs = require('fs')
const path = require('path')

//! stream for only big data

const readStream = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf8')
const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem-stream.txt'))

// readStream.on('data',(allData)=>{

//     writeStream.write(allData);
// })
//* another way to do it
readStream.pipe(writeStream)