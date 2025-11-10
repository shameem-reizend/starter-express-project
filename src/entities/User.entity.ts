import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    USER = "user",
    RESTAURANT = "restaurant"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    user_id: string

    @Column({type: "varchar", length: 10, unique: true})
    phone_number: string

    @Exclude()
    @Column()
    password: string

    @Column()
    name: string

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole

    @Column({nullable: true})
    place: string
}