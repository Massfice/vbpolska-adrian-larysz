import { ApiProperty } from '@nestjs/swagger';
import { PostState } from '../response/Post.model';

export class PostDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    state: PostState;
}
