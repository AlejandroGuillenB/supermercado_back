import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { ClienteMapper } from './cliente.mapper';
import { ClienteDTO } from './cliente.dto';
export declare class ClientesRepository {
    private readonly clientesRepository;
    private readonly mapper;
    constructor(clientesRepository: Repository<ClienteEntity>, mapper: ClienteMapper);
    getAllClientes(): Promise<ClienteEntity[]>;
    getClienteById(id: number): Promise<ClienteEntity>;
    addCliente(clienteDTO: ClienteDTO): Promise<ClienteEntity>;
    updateCliente(id: number, clienteDTO: ClienteDTO): Promise<ClienteEntity>;
}
