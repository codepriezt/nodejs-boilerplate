import { Request, Response } from 'express';
import { url } from '../decorators/decos';
import BaseController from './BaseController';


export default class PostController extends BaseController {
    constructor(params: string) {
        super()
        console.log("we gaada dey , you this big head \n", params)
    }


    @url('/post/create', 'get')
    getRequest(req: Request, res: Response) {
        console.log("i see i saw ... snake head ")
        res.send("i see i saw ...snake head")
    }
}