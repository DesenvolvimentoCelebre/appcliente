import { Exclude, Expose } from 'class-transformer';

export class CompanyDto {
    @Exclude()
    id: number;

    @Expose()
    razao_social: string;

    @Expose()
    cep: number;

    @Expose()
    endereco: string;

    @Expose()
    v_plano: number;

    @Expose()
    matriz: string;

    @Exclude()
    ce: number;

    @Expose()
    license: string

    @Expose()
    estado: string

    @Expose()
    version: string
}

export class ContactCompanyDto {
    @Exclude()
    id: number

    @Expose()
    nome: string

    @Expose()
    ddd: number

    @Expose()
    tel: number
    
    @Expose()
    email: string

    @Exclude()
    ce: number
}
