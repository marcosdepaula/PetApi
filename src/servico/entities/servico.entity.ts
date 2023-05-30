import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  datanascimento: string;

  @Column()
  observacao: string;

  @Column()
  dataregistro: string;

  @Column()
  racaid: number;

  @Column()
  porteid: number;
}
