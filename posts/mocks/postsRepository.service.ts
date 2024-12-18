import { PostsRepositoryServiceInterface } from '../src/interfaces/postsRepositoryService.interface';
import {
    IdPostDto,
    CreatePostDto,
    UpdatePostDto,
} from '../src/posts/models/dto/Post.dto';
import { PostModel } from '../src/posts/models/response/Post.model';

export class PostsRepositoryService
    implements PostsRepositoryServiceInterface
{
    private _calls: { data: any }[] = [];

    private _posts: PostModel[] = [];

    set posts(posts: PostModel[]) {
        this._posts = posts;
    }

    get calls(): { data: any }[] {
        return this._calls;
    }

    async fetchPosts(): Promise<PostModel[]> {
        this._calls.push({
            data: { name: 'fetchAllPosts' },
        });

        return this._posts;
    }

    async getPostById(
        data: IdPostDto,
    ): Promise<PostModel | null> {
        this._calls.push({
            data: { name: 'getPostById', data },
        });

        const post = this._posts.find(
            ({ id: postId }) => data.id === postId,
        );

        if (!post) {
            return null;
        }

        return post;
    }

    async createPost(
        data: CreatePostDto,
    ): Promise<PostModel> {
        this._calls.push({
            data: { name: 'createPost', data },
        });

        const post: PostModel = {
            id: data.id,
            title: data.title,
            content: data.content,
            state: data.state,
            hash: data.hash,
            created_at: data.created_at,
            updated_at: data.updated_at,
        };

        return post;
    }

    async updatePost(
        data: UpdatePostDto,
    ): Promise<PostModel | null> {
        this._calls.push({
            data: { name: 'updatePost', data },
        });

        const post = this._posts.find(
            ({ id: postId }) => data.id === postId,
        );

        if (!post) {
            return null;
        }

        post.id = data.id;
        post.title = data.title;
        post.content = data.content;
        post.state = data.state;
        post.hash = data.hash;
        post.updated_at = data.updated_at;

        return post;
    }

    async deletePost(data: IdPostDto): Promise<void> {
        this._calls.push({
            data: { name: 'deletePost', data },
        });
    }
}
