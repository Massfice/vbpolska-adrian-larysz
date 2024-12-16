import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
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

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    @Get('/')
    @ApiResponse({
        status: HttpStatus.OK,
        type: PostModel,
        isArray: true,
    })
    @ApiOperation({ summary: 'fetch all posts' })
    async fetchAllPosts(): Promise<PostModel[]> {
        throw new Error('not implemented');
    }

    @Get('/:id')
    @ApiOperation({ summary: 'get post by id' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: PostModel,
    })
    async getPost(
        @Param('id') id: string,
    ): Promise<PostModel> {
        throw new Error('not implemented');
    }

    @Post('/')
    @ApiOperation({ summary: 'create post' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: PostModel,
    })
    @HttpCode(HttpStatus.CREATED)
    async createPost(
        @Body() data: PostDto,
    ): Promise<PostModel> {
        throw new Error('not implemented');
    }

    @Put('/:id')
    @ApiOperation({ summary: 'update post' })
    @ApiResponse({ status: HttpStatus.OK, type: PostModel })
    async updatePost(
        @Param('id') id: string,
        @Body() data: PostDto,
    ): Promise<PostModel> {
        throw new Error('not implemented');
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'delete post' })
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletePost(
        @Param('id') id: string,
    ): Promise<void> {
        throw new Error('not implemented');
    }
}
