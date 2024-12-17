import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { map, Observable } from 'rxjs';
import { PostModel } from '../models/response/Post.model';
import { PostDto } from '../models/dto/Post.dto';
import { createApiError } from '../utils/createApiError';
import { PostsServiceInterface } from '../interfaces/PostsService.interface';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        @Inject(PostsServiceInterface)
        private readonly postsService: PostsServiceInterface,
    ) {}

    @Get('/')
    @ApiResponse({
        status: HttpStatus.OK,
        type: PostModel,
        isArray: true,
    })
    @ApiOperation({ summary: 'fetch all posts' })
    fetchAllPosts(): Observable<PostModel[]> {
        return this.postsService.fetchAllPosts();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'get post by id' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: PostModel,
    })
    getPost(
        @Param('id') id: string,
    ): Observable<PostModel> {
        const post = this.postsService.getPostById(id);

        return post.pipe(
            map((value) => {
                if (!value) {
                    throw createApiError(
                        HttpStatus.NOT_FOUND,
                        'Post not found',
                    );
                }

                return value;
            }),
        );
    }

    @Post('/')
    @ApiOperation({ summary: 'create post' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: PostModel,
    })
    @HttpCode(HttpStatus.CREATED)
    createPost(
        @Body() data: PostDto,
    ): Observable<PostModel> {
        return this.postsService.createPost(data);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'update post' })
    @ApiResponse({ status: HttpStatus.OK, type: PostModel })
    updatePost(
        @Param('id') id: string,
        @Body() data: PostDto,
    ): Observable<PostModel> {
        const post = this.postsService.updatePost(id, data);

        return post.pipe(
            map((value) => {
                if (!value) {
                    throw createApiError(
                        HttpStatus.NOT_FOUND,
                        'Post not found',
                    );
                }

                return value;
            }),
        );
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'delete post' })
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    @HttpCode(HttpStatus.NO_CONTENT)
    deletePost(@Param('id') id: string): void {
        return this.postsService.deletePost(id);
    }
}
