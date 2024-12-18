import {
    CreatePostDto,
    IdPostDto,
    UpdatePostDto,
} from '../posts/models/dto/Post.dto';
import { PostModel } from '../posts/models/response/Post.model';

export interface PostsRepositoryServiceInterface {
    fetchPosts(): Promise<PostModel[]>;

    getPostById(data: IdPostDto): Promise<PostModel | null>;

    createPost(data: CreatePostDto): Promise<PostModel>;

    updatePost(
        data: UpdatePostDto,
    ): Promise<PostModel | null>;

    deletePost(data: IdPostDto): Promise<void>;
}
