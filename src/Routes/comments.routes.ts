import  { Request, Router,Response } from "express";
import { BlogInstance } from "../Models/Blog.model";
import express from 'express';
import { commentInstance } from "../Models/Comments.model";




const commentsRouter  = Router();

commentsRouter.post("/comments",async (req:Request,res:Response)=>{
try {
    const results =await   commentInstance.create({...req.body})
    res.json({msg:"Create Successfully",results})
}
catch(e){
    res.json({msg:"comment not added"})
console.log(e)
}

})

export default commentsRouter;