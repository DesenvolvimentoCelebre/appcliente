import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyDto } from './company.dto';
import { plainToClass } from 'class-transformer';


@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
    ) {}

    async findByCe(ce: number): Promise<CompanyDto[]> {
        const companies = await this.companyRepository.find({ where: { ce }});
        return plainToClass(CompanyDto, companies, { excludeExtraneousValues: true });
    }
}
