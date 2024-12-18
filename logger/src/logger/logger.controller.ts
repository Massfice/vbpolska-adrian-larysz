import { Controller } from '@nestjs/common';
import {
    Ctx,
    EventPattern,
    Payload,
} from '@nestjs/microservices';
import { ContextInterface } from '../interfaces/context.interface';

@Controller()
export class LoggerController {
    @EventPattern('events.>')
    async logEvent(
        @Payload() data: any,
        @Ctx() context: ContextInterface,
    ) {
        console.log({
            subject: context.getSubject(),
            ...data,
        });
    }
}
