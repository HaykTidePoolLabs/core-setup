import * as DataLoader from 'dataloader';
import {PostsService} from './posts.service';
import {PostsModule} from './posts.module';
import {Posts} from './posts.entity';

function PostsLoader(postsService: PostsService) {
    return new DataLoader<number, Posts>(async (ids: [] ): Promise<any[]> => {
        const posts = await postsService?.getPostsByUserIds(ids);
        return ids.map(item => posts?.filter(i => i.user?.id === item))
    })
}

export {
    PostsService,
    PostsModule,
}
export default PostsLoader;