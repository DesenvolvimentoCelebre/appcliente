import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(usuario: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(usuario);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { usuario: user.usuario, sub: user.id };
    return this.jwtService.sign(payload);
  }

  async register(userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  validateToken(token: string): boolean {
    try {
        const payload = this.jwtService.verify(token); 
        return !!payload; 
    } catch (e) {
        return false; 
    }
}
}
