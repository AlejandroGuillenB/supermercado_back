import { Test, type TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type UsersEntity } from '../users/users.entity';

describe('AuthService', () => {
  let service: AuthService;
  const token = { userId: 1, username: 'Juan', access_token: 'token' };
  const users: UsersEntity[] = [
    {
      userid: 1,
      username: 'john',
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
