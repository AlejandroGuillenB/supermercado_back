import { ApiProperty } from '@nestjs/swagger';

export class CompraClienteDTO {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly id_venta: number;

  @ApiProperty()
  readonly id_cliente: number;

  constructor(id: number, idVenta: number, idCliente: number) {
    this.id = id;
    this.id_venta = idVenta;
    this.id_cliente = idCliente;
  }
}
