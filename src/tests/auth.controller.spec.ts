import { Test, type TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [JwtService, AuthService, UsersService]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  })
});
