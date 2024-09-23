import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.celebreprojetos.com.br',
      port: 3306,
      username: 'celebreprojeto03',
      password: '585103Aa',  
      database: 'celebreprojeto03',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  
      synchronize: false,  
    }),
    AuthModule,
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
