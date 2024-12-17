import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {
    PostModel,
    PostState,
} from '../models/response/Post.model';
import { PostDto } from '../models/dto/Post.dto';
import { PostsServiceInterface } from '../interfaces/PostsService.interface';

const post: PostModel = {
    id: '123',
    title: 'My post',
    content: 'My post content',
    state: PostState.DRAFT,
    hash: 'hash',
    created_at: new Date(),
    updated_at: new Date(),
};

@Injectable()
export class PostsService implements PostsServiceInterface {
    fetchAllPosts(): Observable<PostModel[]> {
        const posts: PostModel[] = [post];

        return of(posts);
    }

    getPostById(id: string): Observable<PostModel | null> {
        return of(post);
    }

    createPost(data: PostDto): Observable<PostModel> {
        return of(post);
    }

    updatePost(
        id: string,
        data: PostDto,
    ): Observable<PostModel | null> {
        return of(post);
    }

    deletePost(id: string): void {}
}
