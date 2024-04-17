import { ApiProperty } from '@nestjs/swagger';
import { EmpleadosDTO } from '../empleados/empleados.dto';

export class UsersDTO {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly rol: number;

  @ApiProperty()
  readonly empleado: EmpleadosDTO;

  constructor(id: number, name: string, rol: number, empleado: EmpleadosDTO) {
    this.id = id;
    this.username = name;
    this.rol = rol;
    this.empleado = empleado;
  }
}
