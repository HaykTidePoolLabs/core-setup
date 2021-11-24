import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {CreateUserInput} from "./user.input";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async getUser(id: number): Promise<User> {
        return this.userRepository.findOne({ id });
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(createUserInput: CreateUserInput): Promise<User> {
       const user = await this.userRepository.create(createUserInput);
       return this.userRepository.save(user)
    }
}