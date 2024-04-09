import { Test, type TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  const users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should be sign In', async () => {
      const spy = jest.spyOn(service, 'signIn').mockResolvedValue({ access_token: 'token' })
      const user = await service.signIn(users[0].username, users[0].password);
      expect(user).toEqual({ access_token: 'token' })
      spy.mockRestore();
    });
  });
});
