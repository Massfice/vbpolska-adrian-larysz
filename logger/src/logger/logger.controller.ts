import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class LoggerController {
    @EventPattern('events.>')
    async something(data: any) {
        console.log(data);
    }
}
