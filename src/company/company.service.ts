import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.enity';


@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
    ) {}

    async findByCe(ce: number): Promise<Company[]> {
        return this.companyRepository.find({ where: { ce }});
    }
}
