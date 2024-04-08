import { ClienteDTO } from './cliente.dto';
import { ClienteEntity } from './cliente.entity';
export declare class ClienteMapper {
    dtoToEntity(clienteDTO: ClienteDTO): ClienteEntity;
    entityToDto(clienteEntity: ClienteEntity): ClienteDTO;
}
