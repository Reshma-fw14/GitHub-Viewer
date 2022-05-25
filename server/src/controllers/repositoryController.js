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
        /*
        await Product.find({ $and: [...filter] })
      .skip((_page - 1) * _limit)
      .limit(_limit)
      .lean()
      .exec();
        */
        return res.status(200).send(repositories);
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/:id",async(req, res)=>{
    try{

        // console.log(req.params)
        const {id}=req.params;
        const allRepo= await Repository.find().populate({path:"user_id",match:{_id:id},select:`userName-_id`}).lean().exec();
        // ,select:`userName-_id`
        const AllReposOfUser=allReposFunction(allRepo);
        const totalRepos = AllReposOfUser.length;
        const pined=pinnedFunction(AllReposOfUser)
        return res.status(200).json({data:pined,status:true,totalRepos})

    }catch(err){
        console.log(err)
        return res.status(500).json({err:err,message:"errorn in /:id", status:false})
    }
})


module.exports=router;


function allReposFunction(arr){
    let newArr=arr.filter(ele => ele.user_id != null);

    return newArr;
}

function pinnedFunction(arr){
    let newArr=arr.filter(ele => ele.pinned === "true");
    return newArr;
}