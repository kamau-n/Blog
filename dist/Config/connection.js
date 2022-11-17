"use strict";
// src/instances/sequelize.ts
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("Blog", "root", "", {
    dialect: "mysql",
    logging: false,
});
exports.default = db;
