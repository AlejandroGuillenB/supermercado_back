import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClienteDTO } from './cliente.dto';

  @Controller('clientes')
  export class ClientesController {
    constructor(private clientesService: ClienteService) {}

    @Get()
    async getAllClientes(): Promise<ClienteDTO[]> {
        return await this.clientesService.getAllClientes();
    }
  }