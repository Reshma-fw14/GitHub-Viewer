const express=require('express');
const router=express.Router();

const Repository=require('../models/repositoryModel')

router.post('', async(req,res)=>{
    try{
        const repository=await Repository.create(req.body);
        return res.status(200).send(repository);
    }catch(err){
        return res.status(500).send(err.message)
    }
})


router.get('', async(req,res)=>{
    try{
        const repositories=await Repository.find().lean().exec();
        return res.status(200).send(repositories);
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router;