const express = require('express');

const app = express();



app.use('/hello',(req,res)=>{
    res.send('server started hello')
})

app.use('/',(req,res)=>{
    res.send('server started')
})

app.listen(3000,()=>{
    console.log('server is listening on 3000');
});