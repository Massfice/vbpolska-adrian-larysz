import { NestFactory } from '@nestjs/core';
import {
    DocumentBuilder,
    SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { version } from '../package.json';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Post API')
        .setDescription('Post API for managing posts')
        .setVersion(version)
        .addTag('Posts')
        .build();

    const documentFactory = () =>
        SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, documentFactory);

    const configService =
        app.get<ConfigService<Config>>(ConfigService);

    const { port } = configService.get('app', {
        infer: true,
    })!;

    await app.listen(port);
}
bootstrap();
