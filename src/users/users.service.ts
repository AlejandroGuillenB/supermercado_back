import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersMapper } from './users.mapper';
import { type UsersEntity } from './users.entity';
import { type UsersDTO } from './users.dto';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly mapper: UsersMapper
  ) { }

  async getAllUsers(): Promise<UsersDTO[]> {
    const users: UsersEntity[] = await this.usersRepository.getAllUsers()
    return users.map(user => this.mapper.entityToDto(user));
  }

  async getUserById(id: number): Promise<UsersDTO> {
    const user: UsersEntity = await this.usersRepository.getUserById(id);
    return this.mapper.entityToDto(user);
  }

  async getUserByName(name: string): Promise<UsersEntity> {
    return await this.usersRepository.getUserByName(name);
  }

  async newUser(userDTO: UsersDTO): Promise<UsersDTO> {
    const newUser: UsersEntity = await this.usersRepository.newUser(userDTO);
    return this.mapper.entityToDto(newUser);
  }

  async updateUser(id: number, usersDTO: UsersDTO): Promise<UsersDTO> {
    const updateUser = await this.usersRepository.updateUser(id, usersDTO);
    return this.mapper.entityToDto(updateUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
}
