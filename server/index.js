const connect=require('./src/config/db')

const express=require('express');
const app=express();
app.use(express.json())

const userController=require('./src/controllers/userController')
const repositiryController=require('./src/controllers/repositoryController')

app.use('/user', userController)
app.use('/repository', repositiryController)


const port = process.env.PORT || 5000;
app.listen(port, async()=>{
    try{
      await connect();
      console.log(`Listening on ${port}...`)
    }catch(err){
        console.log(err.message)
    }
})