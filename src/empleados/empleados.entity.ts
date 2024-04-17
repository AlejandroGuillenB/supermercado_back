import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('empleados')
export class EmpleadosEntity {
  @PrimaryColumn()
  readonly id: number;

  @Column({ nullable: false })
  readonly nombre: string;

  @Column({ nullable: false })
  readonly apellido: string;

  @Column({ nullable: false })
  readonly edad: number;

  @Column({ nullable: false })
  readonly fecha_nac: Date;

  @Column({ nullable: false })
  readonly tipo_doc: string;

  @Column({ nullable: false })
  readonly nro_doc: string;

  @Column({ nullable: false })
  readonly cuil: string;

  @Column({ nullable: false })
  readonly direccion: string;

  @Column({ nullable: false })
  readonly nro_tel_princ: string;

  @Column({ nullable: true })
  readonly nro_tel_sec: string;

  @Column({ nullable: true })
  readonly email: string;

  @Column({ nullable: false })
  readonly cargo: string;

  @Column({ nullable: false })
  readonly antiguedad: string;

  @Column({ nullable: false })
  readonly fecha_ingreso: Date;

  @Column({ nullable: false })
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
