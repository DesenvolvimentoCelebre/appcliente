import { Exclude, Expose } from 'class-transformer';

export class ContactSupportDto {
    @Exclude()
    id: number;

    @Expose()
    nome: string;

    @Expose()
    email: string;

    @Expose()
    ddd: number;

    @Expose()
    tel: number;

    @Exclude()
    bit: number;
   
}

