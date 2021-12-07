import { Column, Entity, PrimaryGeneratedColumn,  ManyToOne } from 'typeorm';
import {User} from '../user/user.entity';
import {BaseModel} from "../../common/interfaces/base.model";

@Entity()
export class Posts extends BaseModel {

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.posts)
    user!: User;
}