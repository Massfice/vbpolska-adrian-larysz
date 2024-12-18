import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsRepositoryService } from './postsRepository.service';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostsRepositoryServiceInterface,
            useClass: PostsRepositoryService,
        },
    ],
})
export class PostsModule {}
