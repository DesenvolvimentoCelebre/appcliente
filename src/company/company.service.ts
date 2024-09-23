import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company, ContactCompany } from './company.entity';
import { CompanyDto, ContactCompanyDto } from './company.dto';
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

export class ContactCompanyService {
    constructor(
        @InjectRepository(ContactCompany)
        private ContactcompanyRepository: Repository<ContactCompany>
    ) {}

    async findByCe(ce: number): Promise<ContactCompanyDto[]> {
        const Contactcompanies = await this.ContactcompanyRepository.find({ where: { ce }});
        return plainToClass(ContactCompanyDto, Contactcompanies, { excludeExtraneousValues: true });
    }
}