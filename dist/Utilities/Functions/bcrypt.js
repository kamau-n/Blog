"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const hashes = (password) => {
    const hashed = bcrypt.hash(password, 10, (err, hash) => {
        const hashed = hash;
    });
    return hashed;
};
exports.default = hashes;
