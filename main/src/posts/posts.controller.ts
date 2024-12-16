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
import { PostModel } from 'models/response/Post.model';
import { PostDto } from 'models/dto/Post.dto';
import { PostsServiceInterface } from './posts.service';
import { Observable } from 'rxjs';

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
        return this.postsService.getPostById(id);
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
        return this.updatePost(id, data);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'delete post' })
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    @HttpCode(HttpStatus.NO_CONTENT)
    deletePost(@Param('id') id: string): Observable<void> {
        return this.deletePost(id);
    }
}
