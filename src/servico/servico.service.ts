import { Injectable } from '@nestjs/common';

import { CreateServicoResponseDto } from '../dto/create-servico-response.dto';
import { CreateServicoDto } from '../dto/cria-servico.dto';
import { ServicoDto } from '../dto/servico.dto';
import { ServicoRepository } from './repositories/servico.repository';

@Injectable()
export class ServicoService {
  constructor(private readonly servicoRepository: ServicoRepository) {}

  async getServicos(): Promise<ServicoDto[]> {
    return this.servicoRepository.getServicos();
  }

  async getServico(id: number): Promise<ServicoDto> {
    return this.servicoRepository.getServico(id);
  }

  async createServico(
    createServicoDto: CreateServicoDto,
  ): Promise<CreateServicoResponseDto> {
    const id = await this.servicoRepository.createServico(createServicoDto);
    return { id };
  }

  async updateServico(
    id: number,
    createServicoDto: CreateServicoDto,
  ): Promise<void> {
    return this.servicoRepository.updateServico(id, createServicoDto);
  }

  async deleteServico(id: number): Promise<void> {
    return this.servicoRepository.deleteServico(id);
  }
}
