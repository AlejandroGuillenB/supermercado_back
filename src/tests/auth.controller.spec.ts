import { Test, type TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type LoginDTO } from '../auth/login.dto';
import { type UsersEntity } from '../users/users.entity';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let authController: AuthController;
  let jwtService: JwtService;
  let authService: AuthService;
  const login: LoginDTO = {
    name: 'juan',
    pass: '123'
  };
  const access = {
    userId: 1,
    username: 'Juan',
    access_token: undefined
  };
  const usersEntity: UsersEntity[] = [
    {
      userid: 1,
      username: 'Juan',
      password: 'changeme',
      rol: 1,
      empleadoid: 9,
      empleado: {
        id: 9,
        nombre: 'Marcelo',
        apellido: 'Perez',
        edad: 28,
        fecha_nac: new Date('1988-03-17T05:00:00.000Z'),
        tipo_doc: 'DNI',
        nro_doc: '39345679',
        cuil: '12-39345679-9',
        direccion: 'Carabobo 06',
        nro_tel_princ: '+5491138765433',
        nro_tel_sec: '-',
        email: 'MarceloPerez@gmail.com',
        cargo: 'Repositor',
        antiguedad: '9 meses',
        fecha_ingreso: new Date('2019-04-14T05:00:00.000Z'),
        salario_anual: 56000
      },
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
      rol: 2,
      empleadoid: 1,
      empleado: {
        id: 1,
        nombre: 'Marcelo',
        apellido: 'Perez',
        edad: 28,
        fecha_nac: new Date('1988-03-17T05:00:00.000Z'),
        tipo_doc: 'DNI',
        nro_doc: '39345679',
        cuil: '12-39345679-9',
        direccion: 'Carabobo 06',
        nro_tel_princ: '+5491138765433',
        nro_tel_sec: '-',
        email: 'MarceloPerez@gmail.com',
        cargo: 'Repositor',
        antiguedad: '9 meses',
        fecha_ingreso: new Date('2019-04-14T05:00:00.000Z'),
        salario_anual: 56000
      },
      hashPassword: async function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
      validatePassword: async function (password: string): Promise<boolean> {
        return true;
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
    authService = app.get<AuthService>(AuthService);
  });

  describe('Auth', () => {
    it('should be defined', () => {
      expect(authController).toBeDefined();
    });

    it('should be login', async () => {
      const spyJwt = jest.spyOn(jwtService, 'sign').mockImplementation();
      expect(await authController.login(login)).toStrictEqual(access);
      spyJwt.mockRestore();
    });

    it('should throw an UnauthorizedException', async () => {
      const spyJwt = jest.spyOn(jwtService, 'sign').mockImplementation();
      const spySer = jest.spyOn(authService, 'validateUser').mockImplementation(async () => false);
      await expect(authController.login(login)).rejects.toThrowError(UnauthorizedException);
      spyJwt.mockRestore();
      spySer.mockRestore();
    });
  });
});
