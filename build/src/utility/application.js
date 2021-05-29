"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("../app.module");
// import  'fs';
// var files = fs.readdirSync('../controllers');
class Application {
    constructor(app) {
        this.app = app;
        console.log(Application.contollersUrls);
        console.log(new app_module_1.appModule().getControllers());
    }
}
exports.default = Application;
Application.contollersUrls = new Map();
