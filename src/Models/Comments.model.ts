import { DataTypes, Model } from "sequelize"
import db from "../Config/connection"

interface CommentsAttributes
{
    id: string
    content: string
    blog_id: string
}


export class commentInstance extends Model <CommentsAttributes> {}

commentInstance.init  (
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
        },
        content:{
            type:DataTypes.TEXT,
        
            allowNull:false,
        },
        blog_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }

        
    },
    {
        sequelize : db,
        tableName:"Comments"


    }




)