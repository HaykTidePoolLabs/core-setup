import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Posts} from '../posts/posts.entity';
import { BaseModel } from '../../common/interfaces/base.model';

@Entity()
export class User extends BaseModel {

    @Column({ unique: true })
    name: string;

    @OneToMany(type => Posts, post => post.user)
    posts!: Posts[]
}