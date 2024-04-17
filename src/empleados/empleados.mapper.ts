import { Injectable } from '@nestjs/common';
import { EmpleadosDTO } from './empleados.dto';
import { EmpleadosEntity } from './empleados.entity';

@Injectable()
export class EmpleadosMapper {
  dtoToEntity(empleadoDTO: EmpleadosDTO): EmpleadosEntity {
    return new EmpleadosEntity(
      empleadoDTO.id,
      empleadoDTO.nombre,
      empleadoDTO.apellido,
      empleadoDTO.edad,
      empleadoDTO.fecha_nac,
      empleadoDTO.tipo_doc,
      empleadoDTO.nro_doc,
      empleadoDTO.cuil,
      empleadoDTO.direccion,
      empleadoDTO.nro_tel_princ,
      empleadoDTO.nro_tel_sec,
      empleadoDTO.email,
      empleadoDTO.cargo,
      empleadoDTO.antiguedad,
      empleadoDTO.fecha_ingreso,
      empleadoDTO.salario_anual
    );
  }

  entityToDto(empleadoEntity: EmpleadosEntity): EmpleadosDTO {
    return new EmpleadosDTO(
      empleadoEntity.id,
      empleadoEntity.nombre,
      empleadoEntity.apellido,
      empleadoEntity.edad,
      empleadoEntity.fecha_nac,
      empleadoEntity.tipo_doc,
      empleadoEntity.nro_doc,
      empleadoEntity.cuil,
      empleadoEntity.direccion,
      empleadoEntity.nro_tel_princ,
      empleadoEntity.nro_tel_sec,
      empleadoEntity.email,
      empleadoEntity.cargo,
      empleadoEntity.antiguedad,
      empleadoEntity.fecha_ingreso,
      empleadoEntity.salario_anual
    );
  }
}
