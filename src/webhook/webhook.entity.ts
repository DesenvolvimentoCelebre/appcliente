import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('notification')
export class Webhook {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid: number;

    @Column()
    content: number;

    @Column({ type: 'timestamp'})
    createdat: Date
}