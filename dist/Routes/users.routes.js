"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_model_1 = require("../Models/User.model");
const bcrypt_1 = require("../Utilities/Functions/bcrypt");
const userRouter = (0, express_1.Router)();
userRouter.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = User_model_1.userInstance.findAll();
        res.send(users);
    }
    catch (e) {
        res.json({ msg: "unable to get users" });
    }
}));
userRouter.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    // const password=hashes(req.body.password);
    // console.log(password);
    const password = "kamau";
    console.log((0, bcrypt_1.hashes)("kevin"));
    try {
        const [results, isUsed] = yield User_model_1.userInstance.findOrCreate({
            where: { email: req.body.email },
            defaults: { email: req.body.email, name: req.body.name, address: req.body.address, password: password, dob: req.body.dob, contact: req.body.contact }
        });
        if (isUsed) {
            res.send(results);
        }
        else {
            res.json({ msg: "User Already exists" });
        }
        console.log(results);
    }
    catch (e) {
        res.json({ msg: "user not created" });
    }
}));
userRouter.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_model_1.userInstance.findAll();
        res.send(users);
    }
    catch (e) {
        res.json({ msg: "error in obtaining users" });
    }
}));
exports.default = userRouter;
