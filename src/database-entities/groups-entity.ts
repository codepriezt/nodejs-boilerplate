import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type UserRoleType = "e360admin"| "vendor"| "schoolsadmin" |"parent" | "student"

@Entity()
export class Groups {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"enum",
        enum: ["e360admin","vendor","schoolsadmin","parent","student"],
        default:"e360admin"
    })
    name: UserRoleType;


}