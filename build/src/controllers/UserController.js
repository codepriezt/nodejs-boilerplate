"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const decos_1 = require("../decorators/decos");
const BaseController_1 = __importDefault(require("./BaseController"));
// import { url } from 'inspector';
let UserController = class UserController extends BaseController_1.default {
    constructor() {
        super();
        console.log("Hello post User constructor");
    }
    createUser(req, res) {
        console.log("Hellow world");
    }
};
__decorate([
    decos_1.url("/1/create", "post"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    decos_1.BaseUrl("/user"),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
// UserController.register(UserController);
console.log("We are true champions");
