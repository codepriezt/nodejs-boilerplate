import {UserController} from "./controllers/UserController";
import BaseController from "./controllers/BaseController";
import PostController from './controllers/PostController'

let controllers: BaseController[] = []

@register([
    UserController,
    PostController

])
export class appModule {

    getControllers(){
        return controllers;
    }
}

export function register<T extends BaseController>(all: T[] | T){
    return function reg(target: Function){
        if (!Array.isArray(all)) {
            controllers.push(all)
        }else{
            controllers = controllers.concat(all)
        }
       
    }
   
}
