import { Observable, of } from 'rxjs';
import {
    CreateOrUpdatePostPattern,
    DeletePostPattern,
    FetchAllPostPattern,
    GetPostPattern,
    PostsApiInterface,
} from '../src/interfaces/PostsApi.interface';
import {
    PostModel,
    PostState,
} from '../src/models/response/Post.model';

export class PostsApi implements PostsApiInterface {
    private _data: { pattern: string; data: any }[] = [];

    get data(): { pattern: string; data: any }[] {
        return this._data;
    }

    send(
        pattern: FetchAllPostPattern,
        data: {},
    ): Observable<null>;

    send(
        pattern: GetPostPattern,
        data: {},
    ): Observable<null>;

    send(
        pattern: CreateOrUpdatePostPattern,
        data: {},
    ): Observable<null>;

    send(
        pattern:
            | FetchAllPostPattern
            | GetPostPattern
            | CreateOrUpdatePostPattern,
        data: any,
    ): Observable<PostModel[] | PostModel | null> {
        const post: PostModel = {
            id: '123',
            title: 'title',
            content: 'content',
            state: PostState.DRAFT,
            hash: 'hash',
            created_at: new Date(),
            updated_at: new Date(),
        };

        this._data.push({ pattern, data });

        if (pattern === 'posts.fetchAll') {
            return of([post]) as Observable<PostModel[]>;
        } else if (pattern === 'posts.getPost') {
            return of(post) as Observable<PostModel | null>;
        } else if (
            pattern === 'posts.create' ||
            pattern === 'posts.update'
        ) {
            return of(data) as Observable<PostModel>;
        }

        throw new Error('something went wrong');
    }

    emit(
        pattern: DeletePostPattern,
        data: { id: string },
    ): void {
        this._data.push({ pattern, data });
    }
}
