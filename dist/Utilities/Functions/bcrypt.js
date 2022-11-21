"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashes = void 0;
const bcrypt = require("bcrypt");
const hashes = (password) => {
    const hashed = bcrypt.hash(password, 10, (err, hash) => {
        const hashed = hash;
    });
    return hashed;
};
exports.hashes = hashes;
console.log(hashes('kamau'));
