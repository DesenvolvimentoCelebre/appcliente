import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSupport } from './support.entity';
import { ContactSupportDto } from './support.entity.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SupportService {
    constructor(
        @InjectRepository(ContactSupport)
        private contactSupportRepository: Repository<ContactSupport>
    ) {}

    async findBybit(bit: number): Promise<ContactSupportDto[]> {
        const contact = await this.contactSupportRepository.find({ where: { bit }});
        return plainToClass(ContactSupportDto, contact, { excludeExtraneousValues: true });
    }
}
