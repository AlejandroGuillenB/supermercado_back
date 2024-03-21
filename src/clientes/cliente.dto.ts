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

    constructor(id: number, nombre: string, apellido: string, tipo_doc: string, nro_doc: string, nro_tel_princ: string, nro_tel_sec: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.nro_doc = nro_doc;
        this.nro_tel_princ = nro_tel_princ;
        this.nro_tel_sec = nro_tel_sec;
        this.email = email;
    }
}