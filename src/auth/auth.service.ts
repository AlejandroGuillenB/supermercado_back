import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { type JWTPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.usersService.getUserByName(username);
    return await user.validatePassword(pass);
  }

  async generateAccessToken(name: string) {
    const user = await this.usersService.getUserByName(name);
    const payload: JWTPayload = { userId: user.userid };
    return { userId: user.userid, username: user.username, access_token: this.jwtService.sign(payload) };
  }
}
