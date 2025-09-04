

const { Message, Keypair, PublicKey, Transaction,Connection} = require('@solana/web3.js');
const express=require('express');
const { userModel } = require('./models');
const app=express();
const {userModel}=require('./models');
const jwt=require('jsonwebtoken'); 
app.use(express.json());
const Jwt_secret="12345"

const connection=new Connection("https://solana-mainnet.g.alchemy.com/v2/7IU3f_LLvijCmd9o-YePsbarS1WE2M86")

app.post("api/v1/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
   // validate  the inputs using zod ,check is the user  already exsists, hash  the password 


   const keypair = Keypair.generate();
    await userModel.create({
    username,
    password,
    PublicKey:keypair.publicKey.toString(),
    privateKey:keypair.secretKey.toString()
   })
    res.json({
        Message:keypair.publicKey.toString()
    })
})




app.post("api/v1/sign in", async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;


    const user= await userModel.findOne({
        username:username,
        password:password
    });
   
     if(user){
    const token=jwt.sign({
        id:user

    },Jwt_secret)
     res.json({
        token
     })
     }else{
        res.status(400).json({
        Message:"credentials are incorrect"
    })

        }
     

    res.json({
        Message:"sign in"
    })
})








 
app.post("api/v1/txn/sign",async (req,res)=>{

    const serializedTransaction=req.body.message;
    const tx=Transaction.from(serializedTransaction);
    const keypair=new Keypair();
    tx.sign(keypair);
    await connection.sendTransaction(tx);

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