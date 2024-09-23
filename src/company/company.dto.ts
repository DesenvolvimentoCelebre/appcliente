import { Exclude, Expose } from 'class-transformer';

export class CompanyDto {
    @Expose()
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
}
