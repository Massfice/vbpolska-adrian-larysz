import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostDbModel } from './models/db/Post.model';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';

@Controller()
export class PostsController {
    constructor(
        @Inject(PostsRepositoryServiceInterface)
        private readonly postsRepositoryService: PostsRepositoryServiceInterface,
    ) {}

    @MessagePattern('posts.fetch')
    something(data: any) {
        return [];
    }
}
