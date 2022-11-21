"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeInstance = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Config/connection"));
class likeInstance extends sequelize_1.Model {
}
exports.likeInstance = likeInstance;
likeInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    blog_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    tableName: "Likes"
});
