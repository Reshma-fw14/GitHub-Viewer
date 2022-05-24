const mongoose=require('mongoose');

const connect=()=>{
    mongoose.connect('mongodb+srv://reshma:reshma3398@cluster0.jw3n1.mongodb.net/?retryWrites=true&w=majority')
}

module.exports=connect;