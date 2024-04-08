import { ClienteService } from './clientes.service';
import { type ClienteDTO } from './cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClienteService);
    getAllClientes(): Promise<ClienteDTO[]>;
    getClienteById(id: number): Promise<ClienteDTO>;
    addCliente(cliente: ClienteDTO): Promise<ClienteDTO>;
    updateCliente(id: number, cliente: ClienteDTO): Promise<ClienteDTO>;
}
