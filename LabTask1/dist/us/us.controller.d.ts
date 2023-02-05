import { UsService } from './us.service';
import { CreateMeDto } from './dto/create-me.dto';
import { UpdateMeDto } from './dto/update-me.dto';
export declare class UsController {
    private readonly usService;
    constructor(usService: UsService);
    create(createMeDto: CreateMeDto): string;
    findAll(name: string): string;
    findOne(id: string): string;
    update(id: string, updateMeDto: UpdateMeDto): string;
    remove(id: string): string;
}
