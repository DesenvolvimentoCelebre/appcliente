import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportService } from './support.service';
import { SupportController } from './support.controller'
import { ContactSupport } from './support.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ContactSupport])],
    controllers: [SupportController],
    providers: [SupportService],
    exports: [SupportService]
})
export class SupportModule {}
