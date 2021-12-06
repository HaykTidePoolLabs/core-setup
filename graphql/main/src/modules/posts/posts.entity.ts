import { Column, Entity, PrimaryGeneratedColumn,  ManyToOne } from 'typeorm';
import {User} from "../user/user.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.posts)
    user!: User;
}