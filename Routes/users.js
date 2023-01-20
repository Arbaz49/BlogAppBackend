import express from 'express';
import User from "../models/UserModel.js"
const  router =express.Router();

router.route("/:userId").get(async(req,res)=>{
    try{
        const user=await User.findById(req.params.userId)
        console.log(user);
        res.send(req.params.userId);

    }catch(e){
        res.status(500).json({status:"error"})
    }
})

export default router