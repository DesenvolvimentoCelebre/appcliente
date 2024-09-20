import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(usuario: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { usuario: usuario } });
  }
  

  async create(userData: Partial<User>): Promise<User> {
    const salt = await bcrypt.genSalt();
    userData.senha = await bcrypt.hash(userData.senha, salt);
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }
}
