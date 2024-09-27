import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService, ContactCompanyService, CompanyPayService } from './company.service';
import { CompanyController, ContactCompanyController, CompaniesWithInvoicesController } from './company.controller'
import { Company, ContactCompany, CompanyPay } from './company.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Company, ContactCompany, CompanyPay])],
    controllers: [CompanyController, ContactCompanyController, CompaniesWithInvoicesController],
    providers: [CompanyService, ContactCompanyService, CompanyPayService],
    exports: [CompanyService, ContactCompanyService, CompanyPayService]
})
export class CompanyModule {}
