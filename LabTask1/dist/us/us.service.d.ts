import { CreateMeDto } from './dto/create-me.dto';
import { UpdateMeDto } from './dto/update-me.dto';
export declare class UsService {
    create(createMeDto: CreateMeDto): string;
    findAll(name: string): string;
    findOne(id: number): string;
    update(id: number, updateMeDto: UpdateMeDto): string;
    remove(id: number): string;
}
