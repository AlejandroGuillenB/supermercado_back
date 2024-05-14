import { Module } from '@nestjs/common';
import { CompraClienteEntity } from './compraCliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraClienteController } from './compraCliente.controller';
import { CompraClienteService } from './compraCliente.service';
import { CompraClienteRepository } from './compraCliente.repository';
import { CompraClienteMapper } from './compraCliente.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([CompraClienteEntity])],
  controllers: [CompraClienteController],
  providers: [CompraClienteService, CompraClienteRepository, CompraClienteMapper],
  exports: [CompraClienteService]
})

export class CompraClienteModule { }
