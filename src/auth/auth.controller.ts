import { Controller, Post, Request, UseGuards, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Request() req) {
    return {
      success: true,
      token: await this.authService.login(req.user),
      empresa: req.user.ce,
      adm_empresa: req.user.adm,
      adm_sistema: req.user.bit,
      usuario: req.user.usuario
    };
  }

  @Post('register')
  async register(@Body() userData: Partial<User>) {
    return this.authService.register(userData);
  }
}
