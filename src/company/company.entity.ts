import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Exclude } from "class-transformer";

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
}