import { UService } from './u.service';
import { CreateUDto } from './dto/create-u.dto';
import { UpdateUDto } from './dto/update-u.dto';
export declare class UController {
    private readonly uService;
    constructor(uService: UService);
    create(createUDto: CreateUDto): string;
    findAll(name: string): string;
    findOne(id: string): string;
    update(id: string, updateUDto: UpdateUDto): string;
    remove(id: string): string;
}
