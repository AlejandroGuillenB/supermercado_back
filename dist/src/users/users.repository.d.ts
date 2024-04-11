import { type DeleteResult, Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';
export declare class UsersRepository {
    private readonly usersRepository;
    private readonly mapper;
    constructor(usersRepository: Repository<UsersEntity>, mapper: UsersMapper);
    getAllUsers(): Promise<UsersEntity[]>;
    getUserById(id: number): Promise<UsersEntity>;
    getUserByName(name: string): Promise<UsersEntity>;
    newUser(usersDTO: UsersDTO): Promise<UsersEntity>;
    updateUser(id: number, usersDTO: UsersDTO): Promise<UsersEntity>;
    deleteUser(id: number): Promise<DeleteResult>;
}
