"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInstance = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Config/connection"));
class userInstance extends sequelize_1.Model {
}
exports.userInstance = userInstance;
;
userInstance.init({
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    contact: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    tableName: "Users"
});
//userInstance.hasMany(BlogInstance)
