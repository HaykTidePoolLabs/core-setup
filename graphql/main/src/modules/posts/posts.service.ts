import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import {In, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ClientProxy} from '@nestjs/microservices';
import {Cache} from 'cache-manager';
import {Posts} from './posts.entity';
import {CreatePostInput} from './posts.input';
import {TEST_REST_SERVICE} from '../../common/constants/microservices';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts) private postsRepository: Repository<Posts>,
        // @Inject(TEST_REST_SERVICE) private readonly client: ClientProxy
        // @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) {
    }

    async getPost(id: string): Promise<Posts> {
        // this.client.emit('get_user', '');
        return this.postsRepository.findOne({ id })
    }

    async getPosts(params: {}): Promise<Posts[]> {
        // const t = await this.cacheManager.set('aa', {ss: 33})
        // const data = await this.cacheManager.get('aa')
        // const res = await new Promise(resolve => {
        //     this.client.send('get_user', 5000).subscribe((value: any) => {
        //         resolve(value);
        //     })
        // });
        return this.postsRepository.find(params)
    }

    async createPost(createPostInput: CreatePostInput): Promise<Posts> {
        const post = await this.postsRepository.create(createPostInput);
        return this.postsRepository.save(post);
    }

    async getPostsByUserIds(ids: number[]): Promise<Posts[]>  {
        return this.postsRepository.find({
            relations: ['user'],
            where: {
                user: {
                    id: In(ids)
                }
            }
        })
    }

}
