import { ApiProperty } from '@nestjs/swagger';

export class EmpleadosDTO {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly nombre: string;

  @ApiProperty()
  readonly apellido: string;

  @ApiProperty()
  readonly edad: number;

  @ApiProperty()
  readonly fecha_nac: Date;

  @ApiProperty()
  readonly tipo_doc: string;

  @ApiProperty()
  readonly nro_doc: string;

  @ApiProperty()
  readonly cuil: string;

  @ApiProperty()
  readonly direccion: string;

  @ApiProperty()
  readonly nro_tel_princ: string;

  @ApiProperty()
  readonly nro_tel_sec: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly cargo: string;

  @ApiProperty()
  readonly antiguedad: string;

  @ApiProperty()
  readonly fecha_ingreso: Date;

  @ApiProperty()
  readonly salario_anual: number;

  constructor(id: number, nombre: string, apellido: string, edad: number, fechaNac: Date, tipoDoc: string, nroDoc: string, cuil: string, direccion: string, nroTelPrinc: string, nroTelSec: string, email: string, cargo: string, antiguedad: string, fechaIngreso: Date, salarioAnual: number) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fecha_nac = fechaNac;
    this.tipo_doc = tipoDoc;
    this.nro_doc = nroDoc;
    this.cuil = cuil;
    this.direccion = direccion;
    this.nro_tel_princ = nroTelPrinc;
    this.nro_tel_sec = nroTelSec;
    this.email = email;
    this.cargo = cargo;
    this.antiguedad = antiguedad;
    this.fecha_ingreso = fechaIngreso;
    this.salario_anual = salarioAnual;
  }
}
