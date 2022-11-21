import  { Request, Router,Response } from "express";
import { BlogInstance } from "../Models/Blog.model";
import express from 'express';
import { commentInstance } from "../Models/Comments.model";
import { likeInstance } from "../Models/Like.model";


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


//getting a blog together with its comments

blogRouter.get("/blog/comments",async (req:Request,res:Response)=>{
    const id=req.body.id;

    try {
        const comments = await commentInstance.findAll(
            {
                where: {
                    blog_id:id
                }
            }
        )
        res.send(comments)

    }

    catch(e){
        res.json({msg:"an error occured"})
        console.log(e)

    }


})

// liking a blog
blogRouter.post("/blog/like",async (req:Request,res:Response)=>{
try {
    const [results,created] =   await likeInstance.findOrCreate({
        where:{user_id:req.body.user_id},
        defaults:{...req.body}

    })
    if(created) {
        res.json({msg:"liked successfuly"})
    }
    else {
        res.json({msg:"You have already liked the blog"})
    }
}
catch(e){
    res.json({msg:"unable to like"})
    console.log(e)
}


})




export default blogRouter;