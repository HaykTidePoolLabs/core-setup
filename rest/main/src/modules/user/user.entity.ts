import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: number;

    @Column({ unique: true })
    name: string;
}