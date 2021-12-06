import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import {PostsResolver} from "./posts.resolver";
import {Posts} from "./posts.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([Posts]),
  ],
  providers: [
      PostsResolver,
      PostsService,
  ],
  exports: [
      PostsService
  ]

})
export class PostsModule {}
