import  { Request, Router,Response } from "express";
import { BlogInstance } from "../Models/Blog.model";
import express from 'express';


const blogRouter =Router();


blogRouter.get("/",(req:Request,res:Response)=>{
    console.log("connected Successfully")

})

blogRouter.get("/blogs",async (req:Request,res:Response)=>{

    try {
        const blogs = await BlogInstance.findAll()
        return  res.send(blogs)

    }
    catch(error) {
        console.log(error)
    }

})


blogRouter.post("/blogs",async (req:Request,res:Response)=>{
   

    console.log(req.body)
    try  {
   const results = await BlogInstance.create( {...req.body})
   return  res.json({results,msg:"blog created sucessfully"});

    }
    catch(e) {
        console.log(e)
        return res.json ({msg:"creation was unsuccessfull"})  
      }

})


export default blogRouter;