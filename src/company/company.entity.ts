import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Exclude } from "class-transformer";
import { format } from 'date-fns';

@Entity('empresa')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razao_social: string;

    @Column()
    cep: number;

    @Column()
    endereco: string;

    @Column()
    v_plano: number;

    @Column()
    matriz: string;
    
    @Exclude()
    @Column()
    ce: number

    @Column({ type: 'date'})
    license: string

    @Column()
    estado: string
    
    @Column()
    muni: string
    

    @Column()
    version: string
}

@Entity('usuario')
export class ContactCompany {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nome: string

    @Column()
    ddd: number

    @Column()
    tel: number
    
    @Column()
    email: string

    @Exclude()
    @Column()
    ce: number
}