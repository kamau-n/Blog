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
const Comments_model_1 = require("../Models/Comments.model");
const Like_model_1 = require("../Models/Like.model");
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
//getting a blog together with its comments
blogRouter.get("/blog/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    try {
        const comments = yield Comments_model_1.commentInstance.findAll({
            where: {
                blog_id: id
            }
        });
        res.send(comments);
    }
    catch (e) {
        res.json({ msg: "an error occured" });
        console.log(e);
    }
}));
// liking a blog
blogRouter.post("/blog/like", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results, created] = yield Like_model_1.likeInstance.findOrCreate({
            where: { user_id: req.body.user_id },
            defaults: Object.assign({}, req.body)
        });
        if (created) {
            res.json({ msg: "liked successfuly" });
        }
        else {
            res.json({ msg: "You have already liked the blog" });
        }
    }
    catch (e) {
        res.json({ msg: "unable to like" });
        console.log(e);
    }
}));
exports.default = blogRouter;
