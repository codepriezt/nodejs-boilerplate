import { Entity, PrimaryGeneratedColumn, Column  , ManyToOne , ManyToMany , JoinColumn, OneToOne} from "typeorm";
import { Roles } from "./roles-entity";
import { Schools } from "./schools-entity";
import { Users } from "./users-entity";
import { Vendors } from "./vendors-entity";




@Entity()
export class UserGroups{
    

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Roles  )
    role: Roles;


    @OneToOne(type => Users)
    @JoinColumn()
    user : Users;

    @ManyToOne(type => Schools )
    school: Schools;


    @ManyToOne(type => Vendors)
    vendor: Vendors;


}