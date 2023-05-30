import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  NotFoundException,
  HttpStatus,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateServicoResponseDto } from '../dto/create-servico-response.dto';
import { CreateServicoDto } from '../dto/cria-servico.dto';
import { ServicoDto } from '../dto/servico.dto';
import { ServicoService } from './servico.service';

@ApiTags('Servicos PetShop (Banho e Tosa)')
@Controller('servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  async getServicos(): Promise<ServicoDto[]> {
    return this.servicoService.getServicos();
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Atributo inválido',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Pet não Encontrado',
  })
  @Get(':id')
  async getServico(@Param('id', ParseIntPipe) id: number): Promise<ServicoDto> {
    const result = await this.servicoService.getServico(id);
    if (result) return result;

    throw new NotFoundException('Pet Não Cadastrado');
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Atributo inválido',
  })
  @Post()
  async createServico(
    @Body() createServicoDto: CreateServicoDto,
  ): Promise<CreateServicoResponseDto> {
    return this.servicoService.createServico(createServicoDto);
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Atributo inválido',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Pet não Encontrado',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  async updateServico(
    @Param('id', ParseIntPipe) id: number,
    @Body() createServicoDto: CreateServicoDto,
  ): Promise<void> {
    await this.servicoService.updateServico(id, createServicoDto);
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Atributo inválido',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Pet não Encontrado',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteServico(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const result = this.servicoService.deleteServico(id);
    if (!result) {
      throw new NotFoundException('Pet Não Cadastrado');
    }
  }
}
