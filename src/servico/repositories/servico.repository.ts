import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateServicoDto } from '../../dto/cria-servico.dto';
import { ServicoDto } from '../../dto/servico.dto';
import { Servico } from '../entities/servico.entity';

@Injectable()
export class ServicoRepository {
  constructor(
    @InjectRepository(Servico)
    private readonly repository: Repository<Servico>,
  ) {}

  async getServicos(): Promise<Servico[]> {
    return this.repository.find();
  }

  async getServico(id: number): Promise<ServicoDto> {
    return this.repository.findOne({ where: { id } });
  }

  async createServico(createServicoDto: CreateServicoDto): Promise<number> {
    const servico = new Servico();

    servico.nome = createServicoDto.nome;
    servico.observacao = createServicoDto.observacao;
    servico.datanascimento = createServicoDto.datanascimento;
    servico.dataregistro = createServicoDto.dataregistro;
    servico.racaid = createServicoDto.racaid;
    servico.porteid = createServicoDto.porteid;

    const result = await this.repository.insert(servico);

    return result.identifiers[0].id;
  }

  async updateServico(
    id: number,
    createServicoDto: CreateServicoDto,
  ): Promise<void> {
    const servico = new Servico();

    servico.id = id;
    servico.nome = createServicoDto.nome;
    servico.observacao = createServicoDto.observacao;
    servico.datanascimento = createServicoDto.datanascimento;
    servico.dataregistro = createServicoDto.dataregistro;
    servico.racaid = createServicoDto.racaid;
    servico.porteid = createServicoDto.porteid;

    await this.repository.update({ id }, servico);
  }

  async deleteServico(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
