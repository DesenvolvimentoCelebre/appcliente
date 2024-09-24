import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { SupportService } from './support.service';
import { ContactSupport } from './support.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('support/contact')
export class SupportController {
    constructor(private readonly supportService: SupportService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async findByBit(@Query('bit') bit: number): Promise<ContactSupport[]> {
        return this.supportService.findBybit(bit);
    }
}