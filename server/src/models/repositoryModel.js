const mongoose=require('mongoose');

const repositorySchema = new mongoose.Schema({
    "repository": {type:String, required:true},
    "description":{type:String, required:true},
    "pinned":{type:String, required:true},
    "user_id":{type:mongoose.Schema.Types.ObjectId , ref:'user'}
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("repository", repositorySchema);