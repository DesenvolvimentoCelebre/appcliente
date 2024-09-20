import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity'; 

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    // Configuração do TypeORM para conectar com o banco de dados MySQL
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.celebreprojetos.com.br',
      port: 3306,
      username: 'celebreprojeto03',
      password: '585103Aa',  
      database: 'celebreprojeto03',  
      entities: [User],  
      synchronize: true,  
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
