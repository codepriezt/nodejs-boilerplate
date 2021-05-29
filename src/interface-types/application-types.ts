export interface IClassType {
    new(...args: any[]): any;
}

export interface IinferClassType<T extends any> {
    new(...args: any[]): T;
}

export interface IUrlData {
    method_name: string,
    http_method: httpMethods,
    url: string
}

export type httpMethods = "post" | "get" | "put" | "patch" | "delete";