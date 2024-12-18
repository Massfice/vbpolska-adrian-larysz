import { Module } from '@nestjs/common';
import {
    ConfigModule,
    ConfigService,
} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Config, configuration } from './config';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        MongooseModule.forRootAsync({
            useFactory: (
                config: ConfigService<Config>,
            ) => ({
                uri: config.get('mongo', { infer: true })!
                    .url,
            }),
            inject: [ConfigService],
        }),
        PostsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
