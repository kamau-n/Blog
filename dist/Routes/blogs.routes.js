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
const Blog_model_1 = require("../Models/Blog.model");
const blogRouter = (0, express_1.Router)();
blogRouter.get("/", (req, res) => {
    console.log("connected Successfully");
});
blogRouter.get("/blogs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield Blog_model_1.BlogInstance.findAll();
        return res.send(blogs);
    }
    catch (error) {
        console.log(error);
    }
}));
blogRouter.post("/blogs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const results = yield Blog_model_1.BlogInstance.create(Object.assign({}, req.body));
        return res.json({ results, msg: "blog created sucessfully" });
    }
    catch (e) {
        console.log(e);
        return res.json({ msg: "creation was unsuccessfull" });
    }
}));
exports.default = blogRouter;
