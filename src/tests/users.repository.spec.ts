import { type TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersMapper } from '../users/users.mapper';
import { UsersRepository } from '../users/users.repository';
import { DeleteResult, type Repository } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

describe('UsersRepository', () => {
  let usersRepository: UsersRepository;
  let mockedRepository: jest.Mocked<Repository<UsersEntity>>;

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
        throw new Error('Function not implemented.');
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
        throw new Error('Function not implemented.');
      }
    },
  ];

  const newUser = {
    id: 1,
    username: 'john',
    rol: 1,
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
    }
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository, UsersMapper, {
        provide: getRepositoryToken(UsersEntity),
        useValue: { find: jest.fn(), findOneOrFail: jest.fn(), save: jest.fn(), update: jest.fn(), delete: jest.fn() }
      }]
    }).compile();

    usersRepository = app.get<UsersRepository>(UsersRepository);
    mockedRepository = app.get(getRepositoryToken(UsersEntity));
  });

  describe('Users', () => {
    it('should return a array of users', async () => {
      mockedRepository.find.mockResolvedValueOnce(users);
      const clientes = await usersRepository.getAllUsers();
      expect(clientes).toBe(users);
    });

    it('should return a user found by id', async () => {
      mockedRepository.findOneOrFail.mockResolvedValueOnce(users[0]);
      const cliente = await usersRepository.getUserById(1);
      expect(cliente.userid).toBe(users[0].userid);
    });

    it('should return a user found by username', async () => {
      mockedRepository.findOneOrFail.mockResolvedValueOnce(users[0]);
      const cliente = await usersRepository.getUserByName(users[0].username);
      expect(cliente.username).toBe(users[0].username);
    });

    it('should add new user', async () => {
      mockedRepository.save.mockResolvedValueOnce(users[0]);
      const cliente = await usersRepository.newUser(newUser);
      expect(cliente.userid).toBe(users[0].userid);
    });

    it('should delete a user', async () => {
      mockedRepository.delete.mockResolvedValueOnce(new DeleteResult());
      const cliente = await usersRepository.deleteUser(1);
      expect(cliente).toBeDefined();
    });
  });
});
