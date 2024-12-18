import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsRepositoryService } from './postsRepository.service';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import { Post, PostSchema } from './models/db/Post.model';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostsRepositoryServiceInterface,
            useClass: PostsRepositoryService,
        },
    ],
    imports: [
        MongooseModule.forFeature([
            { name: Post.name, schema: PostSchema },
        ]),
    ],
})
export class PostsModule {}
