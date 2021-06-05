import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;


    @Column()
    password: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;


    @Column({ unique: true })
    username: string

    @Column()
    is_verified: boolean
    

    @Column({
        type:"enum",
        enum:[0,1],
        default:0
    })
    is_enabled: number

}