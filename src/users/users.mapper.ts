import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';

export class UsersMapper {
  dtoToEntity(usersDTO: UsersDTO): UsersEntity {
    return new UsersEntity(
      usersDTO.id,
      usersDTO.username,
      usersDTO.rol,
      usersDTO.empleado
    );
  }

  entityToDto(userEntity: UsersEntity): UsersDTO {
    return new UsersDTO(
      userEntity.userid,
      userEntity.username,
      userEntity.rol,
      userEntity.empleado
    );
  }
}
