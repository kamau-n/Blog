"use strict";
exports.__esModule = true;
exports.hashes = void 0;
var bcrypt = require("bcrypt");
var hashes = function(password) {
    var hashed = bcrypt.hash(password, 10, function(err, hash) {
        var hashed = hash;
        console.log(hash)
    });
    return hashed;
};
exports.hashes = hashes;
console.log(hashes("kamau"));