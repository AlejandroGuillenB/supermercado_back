import { Injectable } from '@nestjs/common';
import { ClientesRepository } from './cliente.repository';
import { ClienteMapper } from './cliente.mapper';
import { type ClienteDTO } from './cliente.dto';
import { type ClienteEntity } from './cliente.entity';

@Injectable()
export class ClienteService {
  constructor (
    private readonly clientesRepository: ClientesRepository,
    private readonly mapper: ClienteMapper
  ) {}

  async getAllClientes (): Promise<ClienteDTO[]> {
    const clientes: ClienteEntity[] = await this.clientesRepository.getAllClientes();
    return clientes.map((cliente) => this.mapper.entityToDto(cliente));
  }

  async getClienteById (id: number): Promise<ClienteDTO> {
    const cliente: ClienteEntity = await this.clientesRepository.getClienteById(id);
    return this.mapper.entityToDto(cliente);
  }

  async addCliente (clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    const newCliente: ClienteEntity = await this.clientesRepository.addCliente(clienteDTO);
    return this.mapper.entityToDto(newCliente);
  }

  async updateCliente (id: number, clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    const updateCliente = await this.clientesRepository.updateCliente(id, clienteDTO);
    return this.mapper.entityToDto(updateCliente);
  }

  async summaryCliente (): Promise<any> {
    return await this.clientesRepository.summaryCliente();
  }
}
