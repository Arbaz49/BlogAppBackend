import express from 'express';
import User from "../models/UserModel.js"

const router =express.Router();


router.route("/register").post(async(req,res)=>{
    try{
        const newUser=new User({
            name:req.body.name,
            password:req.body.password
        })
        
        const user=await newUser.save()
        
        res.status(200).json({status:"success",user})

    }catch(e){
        res.status(403).json({status:"error",message:e.message});
        console.log(e.message);
    }

})


router.route("/login").post(async(req,res)=>{
    try{
        const user=await User.findById(req.body.userId);
        const {password,__v,...otherDetails}=user._doc;
        console.log(otherDetails);
        res.send({message:"success",otherDetails});
    }catch(e){
        res.status(403).json({status:"error",message:e.message});
    }
    
})

export default router