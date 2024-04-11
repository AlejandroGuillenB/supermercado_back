import { Test, type TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type LoginDTO } from '../auth/login.dto';
import { type UsersEntity } from '../users/users.entity';

describe('AuthController', () => {
  let authController: AuthController;
  let jwtService: JwtService;
  const login: LoginDTO = {
    name: 'juan',
    pass: '123'
  };
  const usersEntity: UsersEntity[] = [
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
    getUserByName: () => usersEntity[0]
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [JwtService, AuthService, UsersService, UsersRepository, UsersMapper]
    }).overrideProvider(UsersRepository).useValue(mockUsersRepository).compile();

    authController = app.get<AuthController>(AuthController);
    jwtService = app.get<JwtService>(JwtService);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(authController).toBeDefined();
    });

    it('should be login', async () => {
      const spyJwt = jest.spyOn(jwtService, 'sign').mockImplementation();
      expect(await authController.login(login)).toStrictEqual({ access_token: undefined });
      spyJwt.mockRestore();
    });
  });
});
