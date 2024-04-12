import { Test, type TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type UsersEntity } from '../users/users.entity';

describe('AuthService', () => {
  let service: AuthService;
  const token = { access_token: 'token' };
  const users: UsersEntity[] = [
    {
      userid: 1,
      username: 'john',
      password: 'changeme',
      hashPassword: async function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
      validatePassword: async function (password: string): Promise<boolean> {
        return true;
      }
    },
    {
      userid: 2,
      username: 'maria',
      password: 'guess',
      hashPassword: async function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
      validatePassword: async function (password: string): Promise<boolean> {
        throw new Error('Function not implemented.');
      }
    },
  ];

  const mockUsersRepository = {
    getAllUsers: () => users,
    getUserById: () => users[0],
    getUserByName: () => users[0],
    newUser: () => users[0],
    updateUser: () => users[0],
    deleteUser: () => {}
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService, UsersRepository, UsersMapper],
    }).overrideProvider(UsersRepository).useValue(mockUsersRepository).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should be sign In', async () => {
      const spy = jest.spyOn(service, 'generateAccessToken').mockResolvedValue(token);
      const user = await service.generateAccessToken(users[0].username);
      expect(user).toEqual(token);
      spy.mockRestore();
    });

    it('should be validate a user', async () => {
      const user = await service.validateUser(users[0].username, users[0].password);
      expect(user).toEqual(true);
    });
  });
});
