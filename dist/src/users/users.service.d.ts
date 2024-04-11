import { UsersRepository } from './users.repository';
import { UsersMapper } from './users.mapper';
import { type UsersEntity } from './users.entity';
import { type UsersDTO } from './users.dto';
export type User = any;
export declare class UsersService {
    private readonly usersRepository;
    private readonly mapper;
    constructor(usersRepository: UsersRepository, mapper: UsersMapper);
    getAllUsers(): Promise<UsersDTO[]>;
    getUserById(id: number): Promise<UsersDTO>;
    getUserByName(name: string): Promise<UsersEntity>;
    newUser(userDTO: UsersDTO): Promise<UsersDTO>;
    updateUser(id: number, usersDTO: UsersDTO): Promise<UsersDTO>;
    deleteUser(id: number): Promise<void>;
}
