import { Observable } from 'rxjs';
import { PostModel } from '../models/response/Post.model';

type FetchAllPostPattern = 'posts.fetchAll';
type GetPostPattern = 'posts.getPost';
type CreatePostPattern = 'posts.create';
type UpdatePostPattern = 'posts.update';
type CreateOrUpdatePostPattern =
    | CreatePostPattern
    | UpdatePostPattern;
type DeletePostPattern = 'posts.delete';

export interface PostsApiInterface {
    send<
        T extends
            | FetchAllPostPattern
            | GetPostPattern
            | CreateOrUpdatePostPattern,
    >(
        pattern: T,
        data: T extends FetchAllPostPattern
            ? {}
            : T extends GetPostPattern
              ? { id: string }
              : PostModel,
    ): Observable<
        T extends FetchAllPostPattern
            ? PostModel[]
            : T extends GetPostPattern
              ? PostModel | null
              : T extends UpdatePostPattern
                ? PostModel | null
                : PostModel
    >;

    emit(
        pattern: DeletePostPattern,
        data: { id: string },
    ): void;
}

export const PostsApiInterface = Symbol(
    'PostsApiInterface',
);
