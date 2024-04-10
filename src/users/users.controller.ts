import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAllUsers(): Promise<UsersDTO[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UsersDTO> {
    return await this.usersService.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UsersDTO): Promise<UsersDTO> {
    return await this.usersService.newUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: UsersDTO): Promise<UsersDTO> {
    return await this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
