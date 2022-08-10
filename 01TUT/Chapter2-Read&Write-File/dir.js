const { log } = require('console');
const fs = require('fs')

//TODO: create a new folder

if(!fs.existsSync('./new-folder')){ //! existsSync for avoiding overRide file if it was created before
    fs.mkdir('./new-folder', (err) => {
        if (err) throw err;
        console.log('com')
    })
};

//TODO: let`s delete the folder

if(fs.existsSync('./new-folder')){ //! existsSync for avoiding overRide file if it was created before
    fs.rmdir('./new-folder', (err) => {
        if (err) throw err;
        console.log('removed')
    })
};