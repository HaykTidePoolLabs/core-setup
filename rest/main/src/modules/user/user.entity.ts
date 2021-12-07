import { Column, Entity, PrimaryColumn } from 'typeorm';
import {BaseModel} from "../../common/interfaces/base.model";

@Entity()
export class User extends BaseModel {

    @Column({ unique: true })
    name: string;
}