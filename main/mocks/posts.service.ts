import { PostDto } from '../src/models/dto/Post.dto';
import { PostModel } from '../src/models/response/Post.model';
import { Observable } from 'rxjs';
import { PostsServiceInterface } from '../src/posts/posts.service';

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

    deletePost(id: string): void {
        throw new Error('Method not implemented.');
    }
}
