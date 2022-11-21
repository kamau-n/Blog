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
const Comments_model_1 = require("../Models/Comments.model");
const commentsRouter = (0, express_1.Router)();
commentsRouter.post("/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield Comments_model_1.commentInstance.create(Object.assign({}, req.body));
        res.json({ msg: "Create Successfully", results });
    }
    catch (e) {
        res.json({ msg: "comment not added" });
        console.log(e);
    }
}));
exports.default = commentsRouter;
