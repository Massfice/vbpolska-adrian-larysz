import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsServiceInterface } from '../interfaces/PostsService.interface';

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
