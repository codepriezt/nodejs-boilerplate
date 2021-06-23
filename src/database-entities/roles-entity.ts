import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Roles {


    @PrimaryGeneratedColumn()
    id: string;
    generationStrategy: "uuid";

    @Column()
    name: string;

}