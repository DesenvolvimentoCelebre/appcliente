import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    PassportModule,
    JwtModule.register({
      secret: 'token', 
      signOptions: { expiresIn: '60m' }, 
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, LocalStrategy], 
  controllers: [AuthController],
})
export class AuthModule {}
