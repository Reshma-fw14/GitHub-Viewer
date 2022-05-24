const express=require('express');
require("dotenv").config();
const connect=require('./src/config/db')
const cors = require("cors")

const app=express();

app.use(express.json())
app.use(cors())

const userController=require('./src/controllers/userController')
const repositiryController=require('./src/controllers/repositoryController')

app.use('/user', userController)
app.use('/repository', repositiryController)

// console.log("process again : ",process.env.PORT)

const port = 5000;


app.listen(port, async()=>{
    try{
      await connect();
      console.log(`Listening on ${port}...`)
    }catch(err){
        console.log(err.message)
    }
})