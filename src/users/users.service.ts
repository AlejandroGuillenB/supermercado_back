import { Injectable } from '@nestjs/common';
import { users } from '../auth/constants';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = users;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
