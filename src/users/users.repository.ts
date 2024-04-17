import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type DeleteResult, Repository } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
import { UsersMapper } from './users.mapper';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly mapper: UsersMapper
  ) { }

  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: number): Promise<UsersEntity> {
    return await this.usersRepository.findOneOrFail({ where: { userid: id }, relations: ['empleado'] });
  }

  async getUserByName(name: string): Promise<UsersEntity> {
    return await this.usersRepository.findOneOrFail({ where: { username: name } });
  }

  async newUser(usersDTO: UsersDTO): Promise<UsersEntity> {
    const newUser = this.mapper.dtoToEntity(usersDTO);
    return await this.usersRepository.save(newUser);
  }

  async updateUser(id: number, usersDTO: UsersDTO): Promise<UsersEntity> {
    const updateUserDTO: UsersDTO = new UsersDTO(id, usersDTO.username, usersDTO.rol, usersDTO.empleado);
    const updateUser = this.mapper.dtoToEntity(updateUserDTO);
    await this.usersRepository.update(id, updateUser);
    return await this.usersRepository.findOneOrFail({ where: { userid: id } });
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
