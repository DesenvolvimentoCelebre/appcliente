import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  usuario: string;

  @Column()
  senha: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  email: string;

  @Column()
  ddd: string;

  @Column()
  tel: string;

  @Column()
  ce: number

  @Column()
  adm: number

  @Column()
  bit: number
}
