import { Model,DataTypes,HasMany } from "sequelize";
import db from "../Config/connection";
import { BlogInstance } from "./Blog.model";


interface userAttributes {
  
    name: string,
    email: string,
    address: string,
    dob: string
    contact: string
    password: string



}

export class userInstance extends Model <userAttributes> {};

 userInstance.init(
    {

        name:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
    
        email:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
        ,
        address:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        dob:{
            type:DataTypes.DATE,
            allowNull:false,
            
        },
        contact:{
        type:DataTypes.TEXT,
        allowNull:false,
        }
        ,password:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
        
    },
    {
        sequelize:db,
        tableName:"Users"
    }

 )

 userInstance.hasMany(BlogInstance)

