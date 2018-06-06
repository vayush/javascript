const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,t4res) => {
    res.send("HELLO WORLD")
});

app.get('/showform',(req,res) =>{
    res.sendFile(path.join(__dirname,'files','form.html'))
});

//app.use//


app.get('/showgreet',(req,res) =>{
    res.send(`HELLO ${req.query.username}`) //backtick where we use $ and dir
    }
);
 /// learn alll
app.listen(2345,() => {
    console.info("SERVER STARTED")
});