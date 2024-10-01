import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company, ContactCompany, CompanyPay } from './company.entity';
import { CompanyDto, ContactCompanyDto } from './company.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
    ) {}

    async findByCe(ce: number): Promise<CompanyDto[]> {
        const companies = await this.companyRepository.find({ where: { ce }});
        const companiesWithFormattedDate = companies.map(company => ({
            ...company,
            license: new Date(company.license) // Converte para Date
        }));

        return plainToInstance(CompanyDto, companiesWithFormattedDate, { excludeExtraneousValues: true });
    }
}

export class ContactCompanyService {
    constructor(
        @InjectRepository(ContactCompany)
        private ContactcompanyRepository: Repository<ContactCompany>
    ) {}

    async findByCe(ce: number): Promise<ContactCompanyDto[]> {
        const Contactcompanies = await this.ContactcompanyRepository.find({ where: { ce }});
        return plainToInstance(ContactCompanyDto, Contactcompanies, { excludeExtraneousValues: true });
    }
}

export class CompanyPayService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
        @InjectRepository(CompanyPay)
        private companypayRepository: Repository<CompanyPay>
    ) {}

    async getCompaniesWithInvoices(id: number) {
        const companies = await this.companyRepository.findOne({ where: { id: id}});

        if (!companies) {
            return null;
        }

        const invoices = await this.companypayRepository.find({
            where: {ce: id}
        });
    
        return {
            filial: companies.razao_social,
            endereco: companies.endereco,
            cep: companies.cep,
            fatura: invoices.map(f => ({
                vencimento: f.venc,
                valor: companies.v_plano,
                mes_referencia: f.ref,
                qrcode: f.qrcode,
                pix: f.cec,
                pago: f.bit,
                data_pagamento: f.pag || 'Pendente'
            }))
        };
    }
}