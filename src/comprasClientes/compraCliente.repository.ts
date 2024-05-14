import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompraClienteEntity } from './compraCliente.entity';
import { CompraClienteMapper } from './compraCliente.mapper';

@Injectable()
export class CompraClienteRepository {
  constructor(
    @InjectRepository(CompraClienteEntity)
    private readonly compraClienteRepository: Repository<CompraClienteEntity>,
    private readonly mapper: CompraClienteMapper
  ) { }

  async getAllComprasClientes(): Promise<CompraClienteEntity[]> {
    return await this.compraClienteRepository.find();
  }
}
