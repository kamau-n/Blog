import express, { Request, Response } from 'express';
import db from './Config/connection';
import { BlogInstance } from './Models/Blog.model';
import bodyParser from "body-parser";
import { Error } from 'sequelize';
import blogRouter from './Routes/blogs.routes';
import userRouter from './Routes/users.routes';
const PORT =6000;

const app =express();

// app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));




db.authenticate().then((result)=> console.log("connected succeesfully"))
.catch(error=>console.log("there was an error in the connection"));


app.use("/",blogRouter)
app.use("/" ,userRouter);

app.listen(PORT,()=>{
    console.log("App is listening  on Port "  +PORT)
})