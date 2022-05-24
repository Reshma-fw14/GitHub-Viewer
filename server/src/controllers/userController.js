const express=require('express');
const router=express.Router();

const User=require('../models/userModel')

router.post('', async(req,res)=>{
    try{
        const user=await User.create(req.body);
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send(err.message)
    }
})


router.get('', async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        return res.status(200).json({data:users});
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router;