import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Exclude } from "class-transformer";
import { format } from 'date-fns';

@Entity('empresa')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bairro: string;
    
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
    license: Date

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

@Entity('company_pay')
export class CompanyPay {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date'})
    ref: string;

    @Column()
    qrcode: string;
    
    @Column({ type: 'date'})
    venc: string;

    @Column({ type: 'date'})
    pag: string;

    @Column()
    cec: number
    
    @Column()
    ce: number
    
    @Column()
    bit: number
    
}