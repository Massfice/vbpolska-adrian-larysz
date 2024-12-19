import { PostDto } from '../src/models/dto/Post.dto';
import {
    PostModel,
    PostState,
} from '../src/models/response/Post.model';
import { Observable, of } from 'rxjs';
import { PostsServiceInterface } from '../src/interfaces/PostsService.interface';

export class PostsService implements PostsServiceInterface {
    private _calls: { data: any }[] = [];

    private _posts: PostModel[] = [];

    set posts(posts: PostModel[]) {
        this._posts = posts;
    }

    get calls(): { data: any }[] {
        return this._calls;
    }

    fetchAllPosts(): Observable<PostModel[]> {
        this._calls.push({
            data: { name: 'fetchAllPosts' },
        });

        return of(this._posts);
    }

    getPostById(id: string): Observable<PostModel | null> {
        this._calls.push({
            data: { name: 'getPostById', id },
        });

        const post = this._posts.find(
            ({ id: postId }) => id === postId,
        );

        if (!post) {
            return of(null);
        }

        return of(post);
    }

    createPost(data: PostDto): Observable<PostModel> {
        this._calls.push({
            data: { name: 'createPost', data },
        });

        const post: PostModel = {
            id: '123',
            title: data.title,
            content: data.content,
            state: data.state || PostState.DRAFT,
            hash: 'hash',
            created_at: new Date(),
            updated_at: new Date(),
        };

        return of(post);
    }

    updatePost(
        id: string,
        data: PostDto,
    ): Observable<PostModel | null> {
        this._calls.push({
            data: { name: 'updatePost', id, data },
        });

        const post = this._posts.find(
            ({ id: postId }) => id === postId,
        );

        if (!post) {
            return of(null);
        }

        post.title = data.title;
        post.content = data.content;
        post.state = data.state || PostState.DRAFT;

        return of(post);
    }

    deletePost(id: string): void {
        this._calls.push({
            data: { name: 'deletePost', id },
        });
    }
}
