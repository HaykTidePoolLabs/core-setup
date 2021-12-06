import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Posts} from '../posts/posts.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(type => Posts, post => post.user)
    posts!: Posts[]
}