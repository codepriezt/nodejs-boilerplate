import { Express} from "express";
import {appModule} from "../app.module";
import { contollersUrls, baseUrlMetadataKey} from "../decorators/decos";
import { IClassType, IUrlData } from "../interface-types/application-types";

export default class Application {
    private appModule: appModule;
    private controllerInstances: Map<IClassType,any>;
    constructor(private app: Express) {
        this.appModule = new appModule();
        this.controllerInstances = new Map();
        
    }

    boot(){

        const allKeys = contollersUrls.keys();
        
        for (let key of allKeys) {
            
            let baseurl = "/"
            let storeBaseUrl: string | undefined = Reflect.getMetadata(baseUrlMetadataKey, key);
            if (storeBaseUrl) baseurl = storeBaseUrl;

            const methodData: IUrlData[] = []
           
            const methods = contollersUrls.get(key) as IUrlData[];
            
            methods.forEach((value: IUrlData) => {
                let final_url = "";
                if (value.url.startsWith("/")) final_url = baseurl + value.url.slice(1)
                else final_url = baseurl + value.url;

                const data = {
                    method_name: value.method_name,
                    http_method: value.http_method,
                    url: final_url
                }

                let contructor = key.constructor as IClassType;
                this.attachRouteCalls(contructor, data);
               
            });

            // controllerAndMethodData.set(key, methods);
        }
    }

    attachRouteCalls(controller: IClassType, methodData:IUrlData){
        let instance;
        if (this.controllerInstances.has(controller)) {
            instance = this.controllerInstances.get(controller)
        }else{
            instance = new controller("Fuck you bitch");
            this.controllerInstances.set(controller, instance)
        }

        this.app[methodData.http_method](methodData.url, instance[methodData.method_name].bind(instance))

        // let instance = new controller("Fuck you bitch");
    }


}