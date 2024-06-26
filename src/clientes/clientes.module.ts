import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';
import { ClienteController, ClientesController } from './clientes.controller';
import { ClienteService } from './clientes.service';
import { ClienteMapper } from './cliente.mapper';
import { ClientesRepository } from './cliente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  controllers: [ClientesController, ClienteController],
  providers: [ClienteService, ClienteMapper, ClientesRepository]
})
export class ClientesModule { }
