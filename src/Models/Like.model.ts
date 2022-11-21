import { DataTypes, Model } from "sequelize";
import db from "../Config/connection";

 interface likes {
    id: string;
    blog_id: string;
    user_id: string;

}

export class likeInstance extends Model <likes> {}


likeInstance.init(
{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    blog_id:{
        type:DataTypes.INTEGER,
        allowNull:false,


    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},
{
    sequelize:db,
    tableName:"Likes"
}

)