import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('compras_clientes')
export class CompraClienteEntity {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  readonly id_venta: number;

  @Column()
  readonly id_cliente: number;

  constructor(id: number, idVenta: number, idCliente: number) {
    this.id = id;
    this.id_venta = idVenta;
    this.id_cliente = idCliente;
  }
}
