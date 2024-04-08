export declare class ClienteDTO {
    readonly id: number;
    readonly nombre: string;
    readonly apellido: string;
    readonly tipo_doc: string;
    readonly nro_doc: string;
    readonly nro_tel_princ: string;
    readonly nro_tel_sec: string;
    readonly email: string;
    constructor(id: number, nombre: string, apellido: string, tipoDoc: string, nroDoc: string, nroTelPrinc: string, nroTelSec: string, email: string);
}
