
const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const {logger } = require('./middleware/logEvents')
const PORT = process.env.PORT || 3500;



// custom middleware logger
    app.use(logger)

    // cors for origin Resource sharing access
    app.use(cors())


    // the above will not wok with every site .
    //so //TODO: you have to pars a object in cors 
    // const whitelist = ['https://www.yoursiteLikeGoogle.com','http://127.0.0.1:5500','http://localhost:3500']
    // const corsOptions={
    //     origin: (origin,callback)=>{
    //     if(whitelist.indexOf(origin)!==-1 || !origin){
    //         callback(null,true)
    //     }else{
    //         callback(new Error('Not allowed by CORS'))
    //     }
    //     },
    //     OptionsSuccessStatus:200
    // }
    // app.use(cors(corsOptions))




//!  there is a 3 types of middleware

// TODO: built-in middleware to handle URL encoded data

app.use(express.urlencoded({extended:false}));

// built-in middleware for json
app.use(express.json());

// server static files //* css js and more
app.use(express.static(path.join(__dirname,'/public')))



app.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301,'/new-page.html'); //302 by default
});

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World!');
});


// chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//! customize error by middleware
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500).send(err.message);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));