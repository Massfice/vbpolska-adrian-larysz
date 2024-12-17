import { PostDto } from '../src/models/dto/Post.dto';
import { PostModel } from '../src/models/response/Post.model';
import { Observable, of } from 'rxjs';
import { PostsServiceInterface } from '../src/posts/posts.service';

export class PostsService implements PostsServiceInterface {
    private _posts: PostModel[] = [];

    set posts(posts: PostModel[]) {
        this._posts = posts;
    }

    fetchAllPosts(): Observable<PostModel[]> {
        return of(this._posts);
    }

    getPostById(id: string): Observable<PostModel | null> {
        const post = this._posts.find(
            ({ id: postId }) => id === postId,
        );

        if (!post) {
            return of(null);
        }

        return of(post);
    }

    createPost(data: PostDto): Observable<PostModel> {
        const post: PostModel = {
            id: '123',
            title: data.title,
            content: data.content,
            state: data.state,
            hash: 'hash',
            created_at: new Date(),
            updated_at: new Date(),
        };

        return of(post);
    }

    updatePost(
        id: string,
        data: PostDto,
    ): Observable<PostModel> {
        const post = this._posts.find(
            ({ id: postId }) => id === postId,
        );

        if (!post) {
            return of(null);
        }

        post.title = data.title;
        post.content = data.content;
        post.state = data.state;

        return of(post);
    }

    deletePost(id: string): void {}
}
