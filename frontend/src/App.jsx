
import { Component } from 'react'
import './App.css'
import {PublicKey,Keypair,Transaction,SystemProgram, LAMPORTS_PER_SOL, Message,Connection} from '@solana/web3.js'


const connection=new Connection("https://solana-mainnet.g.alchemy.com/v2/7IU3f_LLvijCmd9o-YePsbarS1WE2M86")

function App() {

  async function sendsol(){
    const ix=SystemProgram.transfer({
      fromPubkey: new PublicKey(''),
      toPubkey: new PublicKey(''),
      lamports:0.001*LAMPORTS_PER_SOL

    })

    const {blockhash} = await Connection.getRecentBlockhash()


    const tx=new Transaction().add(ix)
    const  serializedTx=tx.serialize()
    await axios.post("/api/v1/txn/sign",{
      message:serializedTx,
      retry:false
    })

  }
   return   <div>
    <input type="text" placeholder='amount of sol' />
    <input type="text" placeholder='to address' />
    <button>submit</button>

  </div>
  
}

export default App
