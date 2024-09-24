import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')
export class ContactSupport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    ddd: number;

    @Column()
    tel: number;

    @Column()
    bit: number;
   
}

