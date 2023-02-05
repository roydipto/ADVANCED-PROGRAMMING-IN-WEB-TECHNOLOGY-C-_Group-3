import { CreateUDto } from './dto/create-u.dto';
import { UpdateUDto } from './dto/update-u.dto';
export declare class UService {
    create(createUDto: CreateUDto): string;
    findAll(name: string): string;
    findOne(id: number): string;
    update(id: number, updateUDto: UpdateUDto): string;
    remove(id: number): string;
}
