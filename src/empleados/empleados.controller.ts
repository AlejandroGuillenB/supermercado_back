import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { type EmpleadosDTO } from './empleados.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) { }

  @Get()
  async getAllEmpleados(): Promise<EmpleadosDTO[]> {
    return await this.empleadosService.getAllEmpleados();
  }

  @Get(':id')
  async getEmpleadoById(@Param('id') id: number): Promise<EmpleadosDTO> {
    return await this.empleadosService.getEmpleadoById(id);
  }

  @Post()
  async addEmpleado(@Body() empleadoDTO: EmpleadosDTO): Promise<EmpleadosDTO> {
    return await this.empleadosService.addEmpleado(empleadoDTO);
  }

  @Put(':id')
  async updateEmpleado(@Param('id') id: number, @Body() empleadoDTO: EmpleadosDTO): Promise<EmpleadosDTO> {
    return await this.empleadosService.updateEmpleado(id, empleadoDTO);
  }
}
