import { Strategy } from 'passport-jwt';
import { type UsersDTO } from '../users/users.dto';
import { UsersService } from '../users/users.service';
import { type JWTPayload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: JWTPayload): Promise<UsersDTO>;
}
export {};
