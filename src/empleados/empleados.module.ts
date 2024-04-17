import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadosEntity } from './empleados.entity';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { EmpleadosMapper } from './empleados.mapper';
import { EmpleadosRepository } from './empleados.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadosEntity])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService, EmpleadosMapper, EmpleadosRepository],
})
export class EmpleadosModule { }
