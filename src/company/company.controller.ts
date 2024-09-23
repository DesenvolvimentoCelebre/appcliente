import { Controller, Get, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get()
    async findByCe(@Query('ce') ce: number): Promise<Company[]> {
        return this.companyService.findByCe(ce)
    }
}
