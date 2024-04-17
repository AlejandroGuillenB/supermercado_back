import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadosEntity } from './empleados.entity';
import { EmpleadosMapper } from './empleados.mapper';
import { EmpleadosDTO } from './empleados.dto';

@Injectable()
export class EmpleadosRepository {
  constructor(
    @InjectRepository(EmpleadosEntity)
    private readonly empleadosRepository: Repository<EmpleadosEntity>,
    private readonly mapper: EmpleadosMapper
  ) { }

  async getAllEmpleados(): Promise<EmpleadosEntity[]> {
    return await this.empleadosRepository.find();
  }

  async getEmpleadoById(id: number): Promise<EmpleadosEntity> {
    return await this.empleadosRepository.findOneOrFail({ where: { id } });
  }

  async addEmpleado(empleadoDTO: EmpleadosDTO): Promise<EmpleadosEntity> {
    const empleado: EmpleadosEntity = this.mapper.dtoToEntity(empleadoDTO);
    return await this.empleadosRepository.save(empleado);
  }

  async updateEmpleado(id: number, empleadoDTO: EmpleadosDTO): Promise<EmpleadosEntity> {
    const updateEmpleadoDTO: EmpleadosDTO = new EmpleadosDTO(
      empleadoDTO.id,
      empleadoDTO.nombre,
      empleadoDTO.apellido,
      empleadoDTO.edad,
      empleadoDTO.fecha_nac,
      empleadoDTO.tipo_doc,
      empleadoDTO.nro_doc,
      empleadoDTO.cuil,
      empleadoDTO.direccion,
      empleadoDTO.nro_tel_princ,
      empleadoDTO.nro_tel_sec,
      empleadoDTO.email,
      empleadoDTO.cargo,
      empleadoDTO.antiguedad,
      empleadoDTO.fecha_ingreso,
      empleadoDTO.salario_anual
    );
    const updateEmpleado: EmpleadosEntity = this.mapper.dtoToEntity(updateEmpleadoDTO);
    await this.empleadosRepository.update(id, updateEmpleado);
    return await this.getEmpleadoById(id);
  }
}
