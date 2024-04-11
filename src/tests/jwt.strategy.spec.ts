import { Test, type TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../auth/jwt.strategy';
import { type UsersDTO } from '../users/users.dto';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { UsersEntity } from '../users/users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;
  let jwtService: JwtService;
  let usersService: UsersService;
  let mapper: UsersMapper;
  const mockPayload = {
    userId: 1
  };
  const users: UsersDTO[] = [
    {
      id: 1,
      username: 'Juan',
      password: '123'
    },
    {
      id: 2,
      username: 'Pedro',
      password: '123'
    }
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PassportModule],
      providers: [JwtStrategy, UsersService, UsersRepository, UsersMapper, JwtService, {
        provide: getRepositoryToken(UsersEntity),
        useValue: { find: jest.fn(), findOneOrFail: jest.fn(), save: jest.fn(), update: jest.fn(), delete: jest.fn() }
      }]
    }).compile();

    jwtStrategy = app.get<JwtStrategy>(JwtStrategy);
    jwtService = app.get<JwtService>(JwtService);
    usersService = app.get<UsersService>(UsersService);
    mapper = app.get<UsersMapper>(UsersMapper);
  });

  describe('validate', () => {
    it('should return the payload for complete authorization scopes', async () => {
      jest.spyOn(jwtService, 'sign').mockImplementation();
      jest.spyOn(usersService, 'getUserById').mockImplementation(async () => users[0]);
      expect(await jwtStrategy.validate(mockPayload)).toBe(users[0]);
      jest.restoreAllMocks();
    });

    it('should throw UnauthorizedException for incomplete authorization scopes', async () => {
      jest.spyOn(mapper, 'entityToDto').mockImplementation();
      await expect(jwtStrategy.validate({ userId: 3 })).rejects.toThrowError(UnauthorizedException);
      jest.restoreAllMocks();
    });
  });
});
