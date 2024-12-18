import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsRepositoryServiceInterface } from '../interfaces/postsRepositoryService.interface';
import { PostsRepositoryService } from '../../mocks/postsRepository.service';

describe('PostsController', () => {
    let controller: PostsController;

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
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
