
/**
 * T: this is the entity type
 * O : this is the entity DTO
 */
export interface Mappers<T>{

    toDTO(entity : T) : Object;

    toDomain(props: any) : T;

    toPersistence(entity : T) : any;
}

