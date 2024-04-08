import { ClientesRepository } from './cliente.repository';
import { ClienteMapper } from './cliente.mapper';
import { type ClienteDTO } from './cliente.dto';
export declare class ClienteService {
    private readonly clientesRepository;
    private readonly mapper;
    constructor(clientesRepository: ClientesRepository, mapper: ClienteMapper);
    getAllClientes(): Promise<ClienteDTO[]>;
    getClienteById(id: number): Promise<ClienteDTO>;
    addCliente(clienteDTO: ClienteDTO): Promise<ClienteDTO>;
    updateCliente(id: number, clienteDTO: ClienteDTO): Promise<ClienteDTO>;
}
