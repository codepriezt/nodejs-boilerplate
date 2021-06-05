import { Request, Response } from 'express';
import { BaseUrl, url } from '../decorators/decos';
import BaseController from './BaseController';
// import { url } from 'inspector';
@BaseUrl("/users")
export class UserController extends BaseController{

    constructor(greet: string){
        super()
    }
    
    @url("/1/create","post")
    public createUser(req: Request, res: Response){
        res.send("I am in user create file");   
    }

    @url("/view")
    public viewUsers(req: Request, res: Response) {
        res.send("I am in user view");
    }
}
