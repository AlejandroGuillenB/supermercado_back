import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('clientes')
export class ClienteEntity {
  @PrimaryColumn()
  readonly id: number

  @Column({ nullable: false })
  readonly nombre: string

  @Column({ nullable: false })
  readonly apellido: string

  @Column({ nullable: false })
  readonly tipo_doc: string

  @Column({ nullable: false })
  readonly nro_doc: string

  @Column({ nullable: false })
  readonly nro_tel_princ: string

  @Column({ nullable: true })
  readonly nro_tel_sec: string

  @Column({ nullable: true })
  readonly email: string

  constructor (id: number, nombre: string, apellido: string, tipoDoc: string, nroDoc: string, nroTelPrinc: string, nroTelSec: string, email: string) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.tipo_doc = tipoDoc
    this.nro_doc = nroDoc
    this.nro_tel_princ = nroTelPrinc
    this.nro_tel_sec = nroTelSec
    this.email = email
  }
}
