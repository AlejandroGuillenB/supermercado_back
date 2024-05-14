import { Controller, Get } from '@nestjs/common';
import { CompraClienteService } from './compraCliente.service';
import { type CompraClienteDTO } from './compraCliente.dto';

@Controller('comprasclientes')
export class CompraClienteController {
  constructor(private readonly compraClienteService: CompraClienteService) { }

  @Get()
  async getAllComprasClientes(): Promise<CompraClienteDTO[]> {
    return await this.compraClienteService.getAllComprasClientes();
  }
}
