import { Injectable } from '@nestjs/common'
import { ClienteDTO } from './cliente.dto'
import { ClienteEntity } from './cliente.entity'

@Injectable()
export class ClienteMapper {
  dtoToEntity (clienteDTO: ClienteDTO): ClienteEntity {
    return new ClienteEntity(clienteDTO.id, clienteDTO.nombre, clienteDTO.apellido, clienteDTO.tipo_doc, clienteDTO.nro_doc, clienteDTO.nro_tel_princ, clienteDTO.nro_tel_sec, clienteDTO.email)
  }

  entityToDto (clienteEntity: ClienteEntity): ClienteDTO {
    return new ClienteDTO(clienteEntity.id, clienteEntity.nombre, clienteEntity.apellido, clienteEntity.tipo_doc, clienteEntity.nro_doc, clienteEntity.nro_tel_princ, clienteEntity.nro_tel_sec, clienteEntity.email)
  }
}
