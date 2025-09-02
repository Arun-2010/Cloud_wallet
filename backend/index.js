

const { Message } = require('@solana/web3.js');
const express=require('express');
const app=express();

app.post("api/v1/signup",(req,res)=>{
    res.json({
        Message:"sign up"
    })
})

app.post("api/v1/sign in",(req,res)=>{
    res.json({
        Message:"sign in"
    })
})

app.post("api/v1/txn/sign",(req,res)=>{
    res.json({
        Message:"sign up"
    })
})

app.post("api/v1/txn",(req,res)=>{
    res.json({
        Message:"sign up"
    })
})


app.listen(3000);