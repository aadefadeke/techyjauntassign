const express = require ('express');
const app = express ();
const connectdb = require ('./db'); //pulls express
connectdb ();
const port = 5000 //This is port number can be any 4 digit number 







app.listen 
(port, ()=>
    { console.log ("server is running on https://localhost:${port}")
        });