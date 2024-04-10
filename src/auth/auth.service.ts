import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.getUserByName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userid, username: user.username }
    const token = { access_token: await this.jwtService.signAsync(payload) };
    return token;
  }
}
