"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentInstance = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Config/connection"));
class commentInstance extends sequelize_1.Model {
}
exports.commentInstance = commentInstance;
commentInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    blog_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    tableName: "Comments"
});
