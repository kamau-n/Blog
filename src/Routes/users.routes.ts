import { Request, Response, Router } from "express";
import { userInstance } from "../Models/User.model";
import {hashes} from '../Utilities/Functions/bcrypt'
const userRouter =Router();
import bcrypt = require("bcrypt");



userRouter.get("/user",async (req:Request,res:Response)=>{

   try {
    const users = userInstance.findAll();
    res.send(users);
   }
   catch (e){
    res.json({msg:"unable to get users"});

   }


})

userRouter.post("/users",async (req:Request,res:Response)=>{
   // console.log(req.body);
    // const password=hashes(req.body.password);
    // console.log(password);
    const password="kamau";
    console.log(hashes("kevin"))

 try

 {
    const [results,isUsed] =  await userInstance.findOrCreate({
        where :{email:req.body.email},
        defaults:{email:req.body.email,name:req.body.name, address:req.body.address,password:password,dob:req.body.dob,contact:req.body.contact}

    })
    if(isUsed){
        res.send(results)

    }else {
        res.json({msg:"User Already exists"})
    }

    
    console.log(results)


 }
 catch(e) {
    res.json({msg:"user not created"})
 }

})

userRouter.get("/users",async (req:Request,res:Response)=>{

   try 
 {
const users =await userInstance.findAll();
res.send(users)

 }
 catch(e)
 {
    res.json({msg:"error in obtaining users"})
 }
})




export default userRouter;