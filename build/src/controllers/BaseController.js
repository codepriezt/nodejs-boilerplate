"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor() {
        // public fool :T[] = [];
        // constructor(parameters: T) {
        //     this.fool.push(parameters)
        // }
        this.allControllers = [];
    }
    register(controller) {
        if (Array.isArray(controller)) {
            this.allControllers = this.allControllers.concat(controller);
            return;
        }
        this.allControllers.push(controller);
    }
}
exports.default = BaseController;
