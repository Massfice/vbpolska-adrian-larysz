import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostModel } from 'models/response/Post.model';
import { PostDto } from 'models/dto/Post.dto';

export interface PostsServiceInterface {
    fetchAllPosts(): Observable<PostModel[]>;
    getPostById(id: string): Observable<PostModel>;
    createPost(data: PostDto): Observable<PostModel>;
    updatePost(
        id: string,
        data: PostDto,
    ): Observable<PostModel>;
    deletePost(id: string): Observable<void>;
}

export const PostsServiceInterface = Symbol(
    'PostServiceInterface',
);

@Injectable()
export class PostsService implements PostsServiceInterface {
    fetchAllPosts(): Observable<PostModel[]> {
        throw new Error('Method not implemented.');
    }
    getPostById(id: string): Observable<PostModel> {
        throw new Error('Method not implemented.');
    }
    createPost(data: PostDto): Observable<PostModel> {
        throw new Error('Method not implemented.');
    }
    updatePost(
        id: string,
        data: PostDto,
    ): Observable<PostModel> {
        throw new Error('Method not implemented.');
    }
    deletePost(id: string): Observable<void> {
        throw new Error('Method not implemented.');
    }
}
