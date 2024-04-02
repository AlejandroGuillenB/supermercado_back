import { Injectable } from '@nestjs/common'
import { ClientesRepository } from './cliente.repository'
import { ClienteMapper } from './cliente.mapper'
import { type ClienteDTO } from './cliente.dto'
import { type ClienteEntity } from './cliente.entity'

@Injectable()
export class ClienteService {
  constructor (
    private readonly clientesRepository: ClientesRepository,
    private readonly mapper: ClienteMapper
  ) {}

  async getAllClientes (): Promise<ClienteDTO[]> {
    const clientes: ClienteEntity[] = await this.clientesRepository.getAllClientes()
    return clientes.map((cliente) => this.mapper.entityToDto(cliente))
  }
}
