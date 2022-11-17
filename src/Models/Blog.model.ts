import { Model,DataTypes,HasOne,BelongsTo} from "sequelize";
import db from "../Config/connection";
import { userInstance } from "../Models/User.model";

interface BlogAttributes {
    id: string;
    title: string;
    content: string;
    user_id: string;
    



}

export class BlogInstance extends Model <BlogAttributes>  {};



BlogInstance.init (

    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,


        },
        title:{
            type:DataTypes.TEXT,
        
            allowNull:false,


        },

        content:{
            type:DataTypes.TEXT,
            
            allowNull:false,


        }
        ,
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            

            
        }

     
      



    },

    {
        sequelize : db,
        tableName:'Blogs',
    }
 



)



