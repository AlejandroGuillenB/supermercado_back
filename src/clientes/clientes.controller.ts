import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { type ClienteDTO } from './cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClienteService) { }

  @Get()
  async getAllClientes(): Promise<ClienteDTO[]> {
    return await this.clientesService.getAllClientes();
  }

  @Get(':id')
  async getClienteById(@Param('id') id: number): Promise<ClienteDTO> {
    return await this.clientesService.getClienteById(id);
  }

  @Post()
  async addCliente(@Body() cliente: ClienteDTO): Promise<ClienteDTO> {
    return await this.clientesService.addCliente(cliente);
  }

  @Put(':id')
  async updateCliente(@Param('id') id: number, @Body() cliente: ClienteDTO): Promise<ClienteDTO> {
    return await this.clientesService.updateCliente(id, cliente);
  }
}

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clientesService: ClienteService) { }

  @Get('/summary')
  async summaryCliente(): Promise<any> {
    return await this.clientesService.summaryCliente();
  }
}
