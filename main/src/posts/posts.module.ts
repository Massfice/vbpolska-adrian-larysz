import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import {
    PostsServiceInterface,
    PostsService,
} from './posts.service';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostsServiceInterface,
            useClass: PostsService,
        },
    ],
})
export class PostsModule {}
