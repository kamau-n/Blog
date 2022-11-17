"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./Config/connection"));
const body_parser_1 = __importDefault(require("body-parser"));
const blogs_routes_1 = __importDefault(require("./Routes/blogs.routes"));
const users_routes_1 = __importDefault(require("./Routes/users.routes"));
const PORT = 6000;
const app = (0, express_1.default)();
// app.use(express.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
connection_1.default.authenticate().then((result) => console.log("connected succeesfully"))
    .catch(error => console.log("there was an error in the connection"));
app.use("/", blogs_routes_1.default);
app.use("/", users_routes_1.default);
app.listen(PORT, () => {
    console.log("App is listening  on Port " + PORT);
});
