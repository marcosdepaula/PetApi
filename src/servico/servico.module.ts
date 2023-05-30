import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Servico } from './entities/servico.entity';
import { ServicoRepository } from './repositories/servico.repository';
import { ServicoController } from './servico.contrroller';
import { ServicoService } from './servico.service';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  providers: [ServicoService, ServicoRepository],
  controllers: [ServicoController],
  // linha abaixo somente se for utilizar em outra API
  // exports: [ServicoService],
  //-----------------------
})
export class ServicoModule {}
