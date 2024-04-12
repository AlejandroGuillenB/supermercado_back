import { ApiProperty } from '@nestjs/swagger';

export class ClienteDTO {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly nombre: string;

  @ApiProperty()
  readonly apellido: string;

  @ApiProperty()
  readonly tipo_doc: string;

  @ApiProperty()
  readonly nro_doc: string;

  @ApiProperty()
  readonly nro_tel_princ: string;

  @ApiProperty()
  readonly nro_tel_sec: string;

  @ApiProperty()
  readonly email: string;

  constructor (id: number, nombre: string, apellido: string, tipoDoc: string, nroDoc: string, nroTelPrinc: string, nroTelSec: string, email: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.tipo_doc = tipoDoc;
    this.nro_doc = nroDoc;
    this.nro_tel_princ = nroTelPrinc;
    this.nro_tel_sec = nroTelSec;
    this.email = email;
  }
}
