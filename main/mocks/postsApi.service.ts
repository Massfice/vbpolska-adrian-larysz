import { Observable, of } from 'rxjs';
import { PostsApiServiceInterface } from '../src/interfaces/PostsApiService.interface';
import {
    PostModel,
    PostState,
} from '../src/models/response/Post.model';

const post: PostModel = {
    id: '123',
    title: 'Title',
    content: 'Content',
    state: PostState.DRAFT,
    hash: 'hash',
    created_at: new Date(),
    updated_at: new Date(),
};

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
        this._data.push({ pattern, data: {} });

        return of([post]);
    }

    getPostById(
        pattern: string,
        id: string,
    ): Observable<PostModel | null> {
        this._data.push({ pattern, data: { id } });

        if (id === '1') {
            return of(null);
        }

        return of(post);
    }

    createPost(
        pattern: string,
        data: PostModel,
    ): Observable<PostModel> {
        this._data.push({ pattern, data });

        return of(data);
    }

    updatePost(
        pattern: string,
        data: Omit<PostModel, 'created_at'>,
    ): Observable<PostModel | null> {
        this._data.push({ pattern, data });

        if (data.id === 'abcd-123') {
            return of(null);
        }

        return of({ ...data, created_at: new Date() });
    }

    deletePost(pattern: string, id: string): void {
        this._data.push({ pattern, data: { id } });
    }
}
