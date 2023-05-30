import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateServicoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  datanascimento: string;

  @IsString()
  observacao: string;

  @IsString()
  dataregistro: string;

  @IsNumber()
  @IsNotEmpty()
  racaid: number;

  @IsNumber()
  @IsNotEmpty()
  porteid: number;
}
