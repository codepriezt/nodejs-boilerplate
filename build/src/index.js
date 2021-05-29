"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const application_1 = __importDefault(require("./utility/application"));
// rest of the code remains same
const app = express_1.default();
const PORT = 6700;
new application_1.default(app);
app.get('/', (req, res) => {
    // req.Olumide
    console.log("I started here now");
    // new UserController()
    res.send('Express + TypeScript Server');
});
app.get('/shi', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000}`);
});
