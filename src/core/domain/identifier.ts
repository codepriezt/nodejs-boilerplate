
export class Identifier<T>{
    constructor(private value: T){
            this.value = value
    }

    equals(id?: Identifier<T>): boolean {
        //check the entity indentifiers 
        if (id === null || id === undefined) {
            return false
        }

        if (!(id instanceof this.constructor)) {
            return false;
        }

        if(typeof (id) !== 'string') {
            return false
        }

        return id === this.value
    }


    toString() {
        return String(this.value);
    }

    toValue():T {
        return this.value
    }
}