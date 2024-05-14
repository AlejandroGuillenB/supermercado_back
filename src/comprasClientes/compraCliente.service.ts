import { Injectable } from '@nestjs/common';
import { CompraClienteRepository } from './compraCliente.repository';
import { CompraClienteMapper } from './compraCliente.mapper';
import { type CompraClienteDTO } from './compraCliente.dto';
import { type CompraClienteEntity } from './compraCliente.entity';

@Injectable()
export class CompraClienteService {
  constructor(
    private readonly compraClienteRepository: CompraClienteRepository,
    private readonly mapper: CompraClienteMapper
  ) { }

  async getAllComprasClientes(): Promise<CompraClienteDTO[]> {
    const comprasClientes: CompraClienteEntity[] = await this.compraClienteRepository.getAllComprasClientes();
    return comprasClientes.map(compraCliente => this.mapper.entityToDto(compraCliente));
  }
}
