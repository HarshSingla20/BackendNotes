require('dotenv').config();
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('hello');
})

app.get('/twitter',(req,res)=>{
    res.send('Harsh_Singla')
})

app.get('/login',(req,res)=>{
    res.send('<h1> login </h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`App istening on port : ${process.env.PORT}`)
})