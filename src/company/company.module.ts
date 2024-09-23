import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService, ContactCompanyService } from './company.service';
import { CompanyController, ContactCompanyController } from './company.controller'
import { Company, ContactCompany } from './company.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Company, ContactCompany])],
    controllers: [CompanyController, ContactCompanyController],
    providers: [CompanyService, ContactCompanyService],
    exports: [CompanyService, ContactCompanyService]
})
export class CompanyModule {}
