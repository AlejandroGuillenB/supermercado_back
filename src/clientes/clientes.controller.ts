import { Controller, Get } from '@nestjs/common'
import { ClienteService } from './clientes.service'
import { type ClienteDTO } from './cliente.dto'

@Controller('clientes')
export class ClientesController {
  constructor (private readonly clientesService: ClienteService) {}

  @Get()
  async getAllClientes (): Promise<ClienteDTO[]> {
    return await this.clientesService.getAllClientes()
  }
}
