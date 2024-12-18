import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostsController {
    @MessagePattern('posts.fetch')
    something(data: any) {
        console.log(data);

        return [];
    }
}
