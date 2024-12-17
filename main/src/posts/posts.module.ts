import { Module } from '@nestjs/common';
import {
    ClientsModule,
    Transport,
} from '@nestjs/microservices';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsServiceInterface } from '../interfaces/PostsService.interface';
import { PostsApiInterface } from '../interfaces/PostsApi.interface';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostsServiceInterface,
            useClass: PostsService,
        },
    ],
    imports: [
        ClientsModule.registerAsync([
            {
                name: PostsApiInterface,
                imports: [],
                useFactory: async () => ({
                    transport: Transport.NATS,
                    options: {
                        servers: ['nats://localhost:4222'],
                    },
                }),
                inject: [],
            },
        ]),
    ],
})
export class PostsModule {}
