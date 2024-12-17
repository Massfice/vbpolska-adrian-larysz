import { Observable, of } from 'rxjs';
import { PostsApiServiceInterface } from '../src/interfaces/PostsApiService.interface';
import {
    PostModel,
    PostState,
} from '../src/models/response/Post.model';

export class PostsApiService
    implements PostsApiServiceInterface
{
    private _data: { pattern: string; data: any }[] = [];

    get data(): { pattern: string; data: any }[] {
        return this._data;
    }

    fetchAllPosts(
        pattern: string,
    ): Observable<PostModel[]> {
        throw new Error('Method not implemented.');
    }

    getPostById(
        pattern: string,
        id: string,
    ): Observable<PostModel | null> {
        throw new Error('Method not implemented.');
    }

    createPost(
        pattern: string,
        data: PostModel,
    ): Observable<PostModel> {
        throw new Error('Method not implemented.');
    }

    updatePost(
        pattern: string,
        data: Omit<PostModel, 'created_at'>,
    ): Observable<PostModel | null> {
        throw new Error('Method not implemented.');
    }

    deletePost(pattern: string, id: string): void {
        throw new Error('Method not implemented.');
    }
}
