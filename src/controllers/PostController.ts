import { Request, Response } from 'express';
import { url } from '../decorators/decos';
import BaseController from './BaseController';
import { BaseUrl } from '../decorators/decos';


@BaseUrl('posts/')
export default class PostController extends BaseController {
    constructor(params: string) {
        super()
        console.log("we gaada dey , you this big head \n", params)
    }


    @url('/create', 'get')
    getRequest(req: Request, res: Response) {
        res.send("i see i saw ...snake head")
    }
}

