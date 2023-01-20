import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type :String,
        required :true,
        min:3,
        max:20
    },password:{
        type :String,
        required :true,
        min:6,
        max:20
    },
},{timestamps:true})

const User=new mongoose.model("User",userSchema);
export default User; 
