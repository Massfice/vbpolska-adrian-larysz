import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        PostsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
