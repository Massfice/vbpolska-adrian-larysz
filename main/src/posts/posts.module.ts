import { Module } from '@nestjs/common';
import {
    ClientsModule,
    Transport,
} from '@nestjs/microservices';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsServiceInterface } from '../interfaces/PostsService.interface';
import { PostsApiServiceInterface } from '../interfaces/PostsApiService.interface';
import { PostsApiService } from './postsApi.service';
import { IdGeneratorServiceInterface } from '../interfaces/IdGeneratorService.interface';
import { IdGeneratorService } from './idGenerator.service';

@Module({
    controllers: [PostsController],
    providers: [
        {
            provide: PostsServiceInterface,
            useClass: PostsService,
        },
        {
            provide: PostsApiServiceInterface,
            useClass: PostsApiService,
        },
        {
            provide: IdGeneratorServiceInterface,
            useClass: IdGeneratorService,
        },
    ],
    imports: [
        ClientsModule.registerAsync([
            {
                name: 'posts-api-client',
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
