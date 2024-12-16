import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import {
    PostServiceInterface,
    PostsService,
} from './posts.service';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostServiceInterface,
            useClass: PostsService,
        },
    ],
})
export class PostsModule {}
