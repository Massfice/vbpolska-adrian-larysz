import { Injectable } from '@nestjs/common';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import {
    IdPostDto,
    CreatePostDto,
    UpdatePostDto,
} from './models/dto/Post.dto';
import { PostModel } from './models/response/Post.model';

@Injectable()
export class PostsRepositoryService
    implements PostsRepositoryServiceInterface
{
    async fetchPosts(): Promise<PostModel[]> {
        throw new Error('Method not implemented.');
    }

    async getPostById(
        data: IdPostDto,
    ): Promise<PostModel | null> {
        throw new Error('Method not implemented.');
    }

    async createPost(
        data: CreatePostDto,
    ): Promise<PostModel> {
        throw new Error('Method not implemented.');
    }

    async updatePost(
        data: UpdatePostDto,
    ): Promise<PostModel | null> {
        throw new Error('Method not implemented.');
    }

    async deletePost(data: IdPostDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
