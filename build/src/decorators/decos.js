"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.BaseUrl = exports.baseUrlMetadataKey = void 0;
const application_1 = __importDefault(require("../utility/application"));
console.log(application_1.default, "The chill gu");
exports.baseUrlMetadataKey = Symbol("base-url");
function BaseUrl(url) {
    return (constructor) => {
        // console.log(new constructor().createUser);
        if (!url.startsWith("/"))
            url = '/' + url;
        if (!url.endsWith("/"))
            url = url + '/';
        Reflect.defineMetadata(exports.baseUrlMetadataKey, url, constructor.prototype);
    };
}
exports.BaseUrl = BaseUrl;
function url(url, method) {
    return (target, propertyKey, descriptor) => {
        console.log("Inside method", target);
        application_1.default.contollersUrls.set(target, {
            url,
            method_name: propertyKey,
            http_method: method
        });
    };
}
exports.url = url;
