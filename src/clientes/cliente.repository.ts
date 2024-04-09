import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ClienteEntity } from './cliente.entity'
import { ClienteMapper } from './cliente.mapper'
import { ClienteDTO } from './cliente.dto'

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

  async getClienteById (id: number): Promise<ClienteEntity> {
    return await this.clientesRepository.findOneOrFail({ where: { id } })
  }

  async addCliente (clienteDTO: ClienteDTO): Promise<ClienteEntity> {
    const newCliente = this.mapper.dtoToEntity(clienteDTO)
    return await this.clientesRepository.save(newCliente)
  }

  async updateCliente (id: number, clienteDTO: ClienteDTO): Promise<ClienteEntity> {
    const updateClienteDTO: ClienteDTO = new ClienteDTO(
      id,
      clienteDTO.nombre,
      clienteDTO.apellido,
      clienteDTO.tipo_doc,
      clienteDTO.nro_doc,
      clienteDTO.nro_tel_princ,
      clienteDTO.nro_tel_sec,
      clienteDTO.email
    )
    const updateCliente = this.mapper.dtoToEntity(updateClienteDTO)
    await this.clientesRepository.update(id, updateCliente)
    return await this.getClienteById(id)
  }
}
