import { Injectable } from '@nestjs/common';
import { ClientesRepository } from './cliente.repository';
import { ClienteMapper } from './cliente.mapper';
import { ClienteDTO } from './cliente.dto';
import { ClienteEntity } from './cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        private clientesRepository: ClientesRepository,
        private mapper: ClienteMapper,
    ) {}

    async getAllClientes(): Promise<ClienteDTO[]> {
        const clientes: ClienteEntity[] = await this.clientesRepository.getAllClientes();
        return clientes.map((cliente) => this.mapper.entityToDto(cliente));
    }
}