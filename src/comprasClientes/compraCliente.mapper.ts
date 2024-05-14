import { CompraClienteDTO } from './compraCliente.dto';
import { CompraClienteEntity } from './compraCliente.entity';

export class CompraClienteMapper {
  dtoToEntity(compraClienteDTO: CompraClienteDTO): CompraClienteEntity {
    return new CompraClienteEntity(
      compraClienteDTO.id,
      compraClienteDTO.id_venta,
      compraClienteDTO.id_cliente,
    );
  }

  entityToDto(compraClienteEntity: CompraClienteEntity): CompraClienteDTO {
    return new CompraClienteDTO(
      compraClienteEntity.id,
      compraClienteEntity.id_venta,
      compraClienteEntity.id_cliente,
    );
  }
}
