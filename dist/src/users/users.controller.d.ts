import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<UsersDTO[]>;
    getUserById({ id }: UsersDTO): Promise<UsersDTO>;
    newUser(user: UsersDTO): Promise<UsersDTO>;
    updateUser(id: number, user: UsersDTO): Promise<UsersDTO>;
    deleteUser(id: number): Promise<void>;
}
