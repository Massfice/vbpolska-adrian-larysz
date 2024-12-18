import { Injectable } from '@nestjs/common';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import {
    IdPostDto,
    CreatePostDto,
    UpdatePostDto,
} from './models/dto/Post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDbModel } from './models/db/Post.model';
import { PostModel } from './models/response/Post.model';

@Injectable()
export class PostsRepositoryService
    implements PostsRepositoryServiceInterface
{
    constructor(
        @InjectModel(Post.name)
        private postModel: PostDbModel,
    ) {}

    async fetchPosts(): Promise<PostModel[]> {
        const response = await this.postModel.find();

        return response.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            state: post.state,
            hash: post.hash,
            created_at: post.created_at.toISOString(),
            updated_at: post.updated_at.toISOString(),
        }));
    }

    async getPostById(
        data: IdPostDto,
    ): Promise<PostModel | null> {
        const response = await this.postModel.findOne({
            id: data.id,
        });

        if (!response) {
            return null;
        }

        return {
            id: response.id,
            title: response.title,
            content: response.content,
            state: response.state,
            hash: response.hash,
            created_at: response.created_at.toISOString(),
            updated_at: response.updated_at.toISOString(),
        };
    }

    async createPost(
        data: CreatePostDto,
    ): Promise<PostModel> {
        const post = new this.postModel({
            id: data.id,
            title: data.title,
            content: data.content,
            state: data.state,
            hash: data.hash,
            created_at: data.created_at,
            updated_at: data.updated_at,
        });

        const response = await post.save();

        return {
            id: response.id,
            title: response.title,
            content: response.content,
            state: response.state,
            hash: response.hash,
            created_at: response.created_at.toISOString(),
            updated_at: response.updated_at.toISOString(),
        };
    }

    async updatePost(
        data: UpdatePostDto,
    ): Promise<PostModel | null> {
        const post = await this.postModel.findOne({
            id: data.id,
        });

        if (!post) {
            return null;
        }

        post.id = data.id;
        post.title = data.title;
        post.content = data.content;
        post.state = data.state;
        post.hash = data.hash;
        post.updated_at = new Date(data.updated_at);

        const response = await post.save();

        return {
            id: response.id,
            title: response.title,
            content: response.content,
            state: response.state,
            hash: response.hash,
            created_at: response.created_at.toISOString(),
            updated_at: response.updated_at.toISOString(),
        };
    }

    async deletePost(data: IdPostDto): Promise<void> {
        await this.postModel.deleteOne({ id: data.id });
    }
}
