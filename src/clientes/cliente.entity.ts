import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('clientes')
export class ClienteEntity {
    @PrimaryColumn()
    readonly id: number;

    @Column({nullable: false})
    readonly nombre: string;

    @Column({nullable: false})
    readonly apellido: string;

    @Column({nullable: false})
    readonly tipo_doc: string;

    @Column({nullable: false})
    readonly nro_doc: string;

    @Column({nullable: false})
    readonly nro_tel_princ: string;

    @Column({nullable: true})
    readonly nro_tel_sec: string;

    @Column({nullable: true})
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