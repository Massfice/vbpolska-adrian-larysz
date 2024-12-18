import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
    MicroserviceOptions,
    Transport,
} from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const { server } = app
        .get<ConfigService<Config>>(ConfigService)
        .get('nats', { infer: true })!;

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.NATS,
        options: { servers: [server] },
    });

    app.startAllMicroservices();
}
bootstrap();
