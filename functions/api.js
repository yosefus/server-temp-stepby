"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const fakeProjects_1 = require("./fakeData/fakeProjects");
const fakeUser_1 = require("./fakeData/fakeUser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = (0, express_1.default)(), router = (0, express_1.Router)();
app.use(express_1.default.json());
// app.use(require("cors")())
app.use(express_1.default.urlencoded({ extended: false }));
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));
router.all("/test", (req, res) => {
    res.send("success");
});
router.get("/user", (req, res) => res.send(fakeUser_1.user));
router.get("/all-projects", (req, res) => res.send(fakeProjects_1.projects));
router.get("/project/:id", (req, res) => {
    const { id } = req.params;
    console.log("get project by id ", id);
    const found = fakeProjects_1.projects.find((p) => p._id === id);
    res.send(found);
});
router.post("/project", (req, res) => {
    const { body } = req;
    console.log("add new project", body);
    body._id = `${Math.random()}`;
    fakeProjects_1.projects.push(body);
    res.send(fakeProjects_1.projects);
});
router.put("/project/:id", (req, res) => {
    const { body, params: { id } } = req;
    console.log("update project by id", id, body);
    const found = fakeProjects_1.projects.find((p) => p._id === id);
    if (!found)
        return res.status(404).send("not Found");
    Object.keys(body).forEach((key) => {
        found[key] = body[key];
    });
    res.send(found);
});
app.use("/.netlify/functions/api", router);
module.exports.handler = (0, serverless_http_1.default)(app);
