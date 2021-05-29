import { httpMethods, IClassType, IUrlData } from "../interface-types/application-types";

export const contollersUrls: Map < IClassType, IUrlData[] > = new Map();


export const baseUrlMetadataKey = Symbol("base-url");

export function BaseUrl(baseUrl: string) {
    
    return (constructor: Function) => {
        
        if (!baseUrl.startsWith("/")) baseUrl = '/' +baseUrl
        if (!baseUrl.endsWith("/") && baseUrl !== "/") baseUrl = baseUrl + '/';

        Reflect.defineMetadata(baseUrlMetadataKey, baseUrl, constructor.prototype);
    }
    
}

export function url(url: string, method: httpMethods = "get") {
    
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const data = {
            url,
            method_name: propertyKey,
            http_method: method
        }
        if (contollersUrls.has(target)){
            let methodUrls = contollersUrls.get(target);
            methodUrls?.push(data)
            contollersUrls.set(target, methodUrls as IUrlData[]);
        }else{
            contollersUrls.set(target, [data]);
        }
       
   }
}