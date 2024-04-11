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
    password: 'changeme'
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
