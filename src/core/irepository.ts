
/**
 * T: this is the entity type
 * K: This is a type of Object ID
 */
export interface Irepository<T, K > { 
	read(config?: any): Promise<Array<T>>;

	readById(id: K): T;

	create(entity: T ): Promise<T>;

	update(entity: T ): T;

	delete(entity: T ): T;

	createQueryObject ?(): any;
}
