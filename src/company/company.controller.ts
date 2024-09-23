import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CompanyService, ContactCompanyService } from './company.service';
import { Company, ContactCompany } from './company.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async findByCe(@Query('ce') ce: number): Promise<Company[]> {
        return this.companyService.findByCe(ce);
    }
}

@Controller('company/contact')
export class ContactCompanyController {
    constructor(private readonly ContactcompanyService: ContactCompanyService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async findByCe(@Query('ce') ce: number): Promise<ContactCompany[]> {
        return this.ContactcompanyService.findByCe(ce);
    }
}
