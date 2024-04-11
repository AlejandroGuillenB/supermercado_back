import { Test, type TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type UsersDTO } from '../users/users.dto';

describe('AuthController', () => {
  let controller: AuthController;

  const users: UsersDTO[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme'
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess'
    },
  ];

  const mockUsersService = {
    getAllUsers: () => users,
    getUserById: () => users[0],
    getUserByName: () => users[0],
    newUser: () => users[0],
    updateUser: () => users[0],
    deleteUser: () => {}
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [JwtService, AuthService, UsersService, UsersRepository, UsersMapper]
    }).overrideProvider(UsersRepository).useValue(mockUsersService).compile();

    controller = module.get<AuthController>(AuthController);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  })
});
