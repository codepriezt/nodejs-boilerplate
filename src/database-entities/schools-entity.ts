import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from "typeorm";
import { Users } from "./users-entity";


@Entity()
export class Schools {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;


    @Column({ unique: true })
    phone: string;

    @Column()
    name: string;


    @Column({ unique: true })
    username: string;


    @Column({type: "text"})
    address:string;


    @Column()
    logo_path:string;


    @OneToOne(type => Users)
    @JoinColumn()
    user : Users

}