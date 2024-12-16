import { NestFactory } from '@nestjs/core';
import {
    DocumentBuilder,
    SwaggerModule,
} from '@nestjs/swagger';
import { version } from '../package.json';
import { AppModule } from './app.module';

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

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
