import { Controller, Get, Query, UseGuards, Param } from '@nestjs/common';
import { CompanyService, ContactCompanyService, CompanyPayService } from './company.service';
import { Company, ContactCompany } from './company.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { get } from 'http';

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

@Controller('company/invoices')
@UseGuards(JwtAuthGuard)
export class CompaniesWithInvoicesController {
    constructor(private readonly companypayService: CompanyPayService) {}

    @Get(':id')
    async getInvoices(@Param('id') id: string) {
        const cec = parseInt(id, 10);
        return this.companypayService.getCompaniesWithInvoices(cec)
    }
}