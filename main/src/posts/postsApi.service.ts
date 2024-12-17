import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PostsApiServiceInterface } from '../interfaces/PostsApiService.interface';
import { PostModel } from '../models/response/Post.model';

@Injectable()
export class PostsApiService
    implements PostsApiServiceInterface
{
    constructor(
        @Inject('posts-api-client')
        private readonly postsApi: ClientProxy,
    ) {}

    fetchAllPosts(
        pattern: string,
    ): Observable<PostModel[]> {
        return this.postsApi.send<PostModel[]>(pattern, {});
    }

    getPostById(
        pattern: string,
        id: string,
    ): Observable<PostModel | null> {
        return this.postsApi.send<PostModel | null>(
            pattern,
            { id },
        );
    }

    createPost(
        pattern: string,
        data: PostModel,
    ): Observable<PostModel> {
        return this.postsApi.send<PostModel>(pattern, data);
    }

    updatePost(
        pattern: string,
        data: Omit<PostModel, 'created_at'>,
    ): Observable<PostModel | null> {
        return this.postsApi.send<PostModel | null>(
            pattern,
            data,
        );
    }

    deletePost(pattern: string, id: string): void {
        this.postsApi.emit(pattern, { id });
    }
}
