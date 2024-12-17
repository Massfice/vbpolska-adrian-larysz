import { IdGeneratorServiceInterface } from '../src/interfaces/IdGeneratorService.interface';

export class IdGeneratorService
    implements IdGeneratorServiceInterface
{
    generateId(): string {
        return 'uuidv4';
    }
}
