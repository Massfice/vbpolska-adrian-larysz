import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import { PostsRepositoryService } from '../../mocks/postsRepository.service';
import { PostModel } from './models/response/Post.model';
import {
    CreatePostDto,
    UpdatePostDto,
} from './models/dto/Post.dto';

describe('PostsController', () => {
    let controller: PostsController;
    let postsRepositoryService: PostsRepositoryService;

    beforeEach(async () => {
        const module: TestingModule =
            await Test.createTestingModule({
                controllers: [PostsController],
                providers: [
                    {
                        provide:
                            PostsRepositoryServiceInterface,
                        useClass: PostsRepositoryService,
                    },
                ],
            }).compile();

        controller =
            module.get<PostsController>(PostsController);

        postsRepositoryService =
            module.get<PostsRepositoryService>(
                PostsRepositoryServiceInterface,
            );
    });

    describe('fetchAllPosts', () => {
        it('returns empty array', async () => {
            postsRepositoryService.posts = [];

            const response =
                await controller.fetchAllPosts();

            expect(response).toEqual([]);

            expect(postsRepositoryService.calls).toEqual([
                { data: { name: 'fetchAllPosts' } },
            ]);
        });

        it('returns posts', async () => {
            const posts: PostModel[] = [
                {
                    id: '123',
                    title: 'My first post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
                {
                    id: '456',
                    title: 'My second post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
            ];

            postsRepositoryService.posts = posts;

            const response =
                await controller.fetchAllPosts();

            expect(response).toEqual(posts);

            expect(postsRepositoryService.calls).toEqual([
                { data: { name: 'fetchAllPosts' } },
            ]);
        });
    });

    describe('getPost', () => {
        it('returns post', async () => {
            const posts: PostModel[] = [
                {
                    id: '123',
                    title: 'My first post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
                {
                    id: '456',
                    title: 'My second post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
            ];

            postsRepositoryService.posts = posts;

            const response = await controller.getPost({
                id: '456',
            });

            expect(response).toEqual({
                id: '456',
                title: 'My second post',
                content: 'My post content',
                state: 'state',
                hash: 'hash',
                created_at: 'created_at',
                updated_at: 'updated_at',
            });

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'getPostById',
                        data: { id: '456' },
                    },
                },
            ]);
        });

        it('returns null if post is not found', async () => {
            const response = await controller.getPost({
                id: '456',
            });

            expect(response).toEqual(null);

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'getPostById',
                        data: { id: '456' },
                    },
                },
            ]);
        });
    });

    describe('createPost', () => {
        it('creates a post', async () => {
            const postData: CreatePostDto = {
                id: '123',
                title: 'My first post',
                content: 'My post content',
                state: 'state',
                hash: 'hash',
                created_at: 'created_at',
                updated_at: 'updated_at',
            };

            const response =
                await controller.createPost(postData);

            expect(response).toEqual(postData);

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'createPost',
                        data: postData,
                    },
                },
            ]);
        });
    });

    describe('updatePost', () => {
        it('updates post if found', async () => {
            const posts: PostModel[] = [
                {
                    id: '123',
                    title: 'My first post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
                {
                    id: '456',
                    title: 'My second post',
                    content: 'My post content',
                    state: 'state',
                    hash: 'hash',
                    created_at: 'created_at',
                    updated_at: 'updated_at',
                },
            ];

            postsRepositoryService.posts = posts;

            const postData: UpdatePostDto = {
                id: '123',
                title: 'Updated',
                content: 'Updated',
                state: 'Updated',
                hash: 'Updated',
                updated_at: 'Updated',
            };

            const response =
                await controller.updatePost(postData);

            expect(response).toEqual({
                ...postData,
                created_at: 'created_at',
            });

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'updatePost',
                        data: postData,
                    },
                },
            ]);
        });

        it('returns null if post is not found', async () => {
            const postData: UpdatePostDto = {
                id: '123',
                title: 'Updated',
                content: 'Updated',
                state: 'Updated',
                hash: 'Updated',
                updated_at: 'Updated',
            };

            const response =
                await controller.updatePost(postData);

            expect(response).toEqual(null);

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'updatePost',
                        data: postData,
                    },
                },
            ]);
        });
    });

    describe('deletePost', () => {
        it('deletes post', async () => {
            const response = await controller.deletePost({
                id: '12345',
            });

            expect(response).toBeUndefined();

            expect(postsRepositoryService.calls).toEqual([
                {
                    data: {
                        name: 'deletePost',
                        data: { id: '12345' },
                    },
                },
            ]);
        });
    });
});
