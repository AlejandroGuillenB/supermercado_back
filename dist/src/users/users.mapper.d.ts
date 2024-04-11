import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
export declare class UsersMapper {
    dtoToEntity(usersDTO: UsersDTO): UsersEntity;
    entityToDto(userEntity: UsersEntity): UsersDTO;
}
