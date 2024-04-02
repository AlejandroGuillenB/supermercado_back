import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ClienteEntity } from './cliente.entity'
import { ClienteMapper } from './cliente.mapper'

@Injectable()
export class ClientesRepository {
  constructor (
    @InjectRepository(ClienteEntity)
    private readonly clientesRepository: Repository<ClienteEntity>,
    private readonly mapper: ClienteMapper
  ) { }

  async getAllClientes (): Promise<ClienteEntity[]> {
    return await this.clientesRepository.find()
  }
}
