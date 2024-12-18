import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostDbModel } from './models/db/Post.model';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import { PostModel } from './models/response/Post.model';
import {
    CreatePostDto,
    IdPostDto,
    UpdatePostDto,
} from './models/dto/Post.dto';

@Controller()
export class PostsController {
    constructor(
        @Inject(PostsRepositoryServiceInterface)
        private readonly postsRepositoryService: PostsRepositoryServiceInterface,
    ) {}

    @MessagePattern('posts.fetch')
    fetchAllPosts(): Promise<PostModel[]> {
        return this.postsRepositoryService.fetchPosts();
    }

    @MessagePattern('posts.get')
    getPost(data: IdPostDto): Promise<PostModel | null> {
        return this.postsRepositoryService.getPostById(
            data,
        );
    }

    @MessagePattern('posts.create')
    createPost(data: CreatePostDto): Promise<PostModel> {
        return this.postsRepositoryService.createPost(data);
    }

    @MessagePattern('posts.update')
    updatePost(
        data: UpdatePostDto,
    ): Promise<PostModel | null> {
        return this.postsRepositoryService.updatePost(data);
    }

    @MessagePattern('posts.delete')
    deletePost(data: IdPostDto): Promise<void> {
        return this.postsRepositoryService.deletePost(data);
    }
}
