const express = require('express');
const dotenv = require('dotenv');
const { DbConnect } = require('./DB/Db');
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());


app.get('/test', (req, res) => {
    res.json('test ok!!');
});


//routes
const userRoutes = require('./routes/userRoutes');


//user api
app.use('/user',userRoutes);


DbConnect()
.then(()=>{
    app.listen((4000),()=>{
        console.log('listening on port  number 4000');
    })
})
.catch((error)=>{
    console.log("error occured while connecting to mongodb in index.js",error);
})

