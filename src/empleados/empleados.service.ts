import { Injectable } from '@nestjs/common';
import { EmpleadosRepository } from './empleados.repository';
import { EmpleadosMapper } from './empleados.mapper';
import { type EmpleadosDTO } from './empleados.dto';
import { type EmpleadosEntity } from './empleados.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    private readonly empleadosRepository: EmpleadosRepository,
    private readonly mapper: EmpleadosMapper
  ) {}

  async getAllEmpleados(): Promise<EmpleadosDTO[]> {
    const empleados: EmpleadosEntity[] = await this.empleadosRepository.getAllEmpleados();
    return empleados.map((empleado) => this.mapper.entityToDto(empleado));
  }

  async getEmpleadoById(id: number): Promise<EmpleadosDTO> {
    const empleado: EmpleadosEntity = await this.empleadosRepository.getEmpleadoById(id);
    return this.mapper.entityToDto(empleado);
  }

  async addEmpleado(empleadoDTO: EmpleadosDTO): Promise<EmpleadosDTO> {
    const newEmpleado: EmpleadosEntity = await this.empleadosRepository.addEmpleado(empleadoDTO);
    return this.mapper.entityToDto(newEmpleado);
  }

  async updateEmpleado(id: number, empleadoDTO: EmpleadosDTO): Promise<EmpleadosDTO> {
    const updateEmpleado: EmpleadosEntity = await this.empleadosRepository.updateEmpleado(id, empleadoDTO);
    return this.mapper.entityToDto(updateEmpleado);
  }
}
