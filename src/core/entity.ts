import { ObjectId, Types } from 'mongoose';
import { genericObject } from "../../general/base-interfaces/types-interfaces";


export const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

interface IncludeID {
    id?: string | id_rep<ObjectId>
}


type id_rep<M> = M extends ObjectId ? Types._ObjectId : ObjectId;

export abstract class Entity<T extends genericObject & IncludeID> {
    protected _id: id_rep<ObjectId>;
    protected vals: T;

    // Take note of this particular nuance here:
    // Why is "id" optional?
    constructor(vals: T, id?: Types._ObjectId) {
        this._id = id ? id : vals._id ? vals._id : new Types.ObjectId()?._id
        vals.id = this._id;
        this.vals = vals;
    }

    update_id(id: id_rep<ObjectId>): void {
        this._id = id;

        //@ts-ignore
        this.vals._id = id;
    }

    get values(): T {
        return this.vals;
    }

    // protected abstract toPersistence(entity: this);

    /**
     * Entities are compared based on their referential equality.
     */
    public equals(object?: Entity<T>): boolean {

        if (object == null || object == undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }

        return object._id ?
            this._id ?
                this._id.equals(object._id) :
                false :
            false;
    }

}