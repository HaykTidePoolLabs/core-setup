import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Cache} from 'cache-manager';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import {ClientProxy} from '@nestjs/microservices';
import {TEST_GRAPHQL_SERVICE} from '../../common/constants/microservices';


@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private userRepository: Repository<User>,
      // @Inject(TEST_GRAPHQL_SERVICE) private readonly client: ClientProxy,
      // @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    return this.userRepository.save(user)
  }

  async findAll(): Promise<User[]> {
    // const t = await this.cacheManager.set('aa', {ss: 33})
    // const data = await this.cacheManager.get('aa')
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User>  {
    return this.userRepository.findOne({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
