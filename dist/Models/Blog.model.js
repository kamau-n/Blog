"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogInstance = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Config/connection"));
class BlogInstance extends sequelize_1.Model {
}
exports.BlogInstance = BlogInstance;
;
BlogInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    tableName: 'Blogs',
});
