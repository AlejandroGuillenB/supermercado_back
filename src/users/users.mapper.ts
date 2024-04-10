import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';

export class UsersMapper {
  dtoToEntity(usersDTO: UsersDTO): UsersEntity {
    return new UsersEntity(usersDTO.id, usersDTO.username, usersDTO.password);
  }

  entityToDto(userEntity: UsersEntity): UsersDTO {
    return new UsersDTO(userEntity.userid, userEntity.username, userEntity.password);
  }
}
