const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    "profile_img":{type:String, required:true},
    "userName":{type:String, required:true},
    "userHandle":{type:String, required:true},
    "bio":{type:String, required:true},
    "company":{type:String, required:true},
    "followers":{type:Number, required:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("user", userSchema);