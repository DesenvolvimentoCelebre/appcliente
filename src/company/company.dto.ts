import { Exclude, Expose } from 'class-transformer';

export class CompanyDto {
    @Expose()
    id: number;

    @Expose()
    bairro: string 

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
    createdAt: Date; // ou string, dependendo do tipo

    @Expose({ name: 'formattedDate' }) // Nome que você quer usar na saída
    getFormattedDate(): string {
        const day = String(this.createdAt.getDate()).padStart(2, '0');
        const month = String(this.createdAt.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const year = this.createdAt.getFullYear();
        return `${day}/${month}/${year}`;
    }

    @Expose()
    estado: string

    @Expose()
    muni: string

    @Expose()
    version: string
}

export class ContactCompanyDto {
    @Expose()
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
