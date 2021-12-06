import {Inject, Injectable} from '@nestjs/common';
import {In, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Posts} from "./posts.entity";
import {CreatePostInput} from "./posts.input";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts) private postsRepository: Repository<Posts>,
        // @Inject('TEST_REST_SERVICE') private readonly client: ClientProxy
    ) {
    }

    async getPost(id: number): Promise<Posts> {
        return this.postsRepository.findOne({ id })
    }

    async getPosts(params: {}): Promise<Posts[]> {
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