import { Test, type TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersMapper } from '../users/users.mapper';
import { type UsersEntity } from '../users/users.entity';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: UsersRepository;

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

  const mockUsersRepository = {
    getAllUsers: () => users,
    getUserById: () => users[0],
    getUserByName: () => users[0],
    newUser: () => users[0],
    updateUser: () => users[0],
    deleteUser: () => { }
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository, UsersMapper],
    }).overrideProvider(UsersRepository).useValue(mockUsersRepository).compile();

    usersService = app.get<UsersService>(UsersService);
    usersRepository = app.get<UsersRepository>(UsersRepository);
  });

  describe('Users', () => {
    it('should be defined', () => {
      expect(usersService).toBeDefined();
    });

    it('should return a array of users', async () => {
      const spy = jest.spyOn(usersRepository, 'getAllUsers').mockImplementation(async () => users);
      expect((await usersService.getAllUsers()).length).toEqual(2);
      spy.mockRestore();
    });

    it('should found a user by id', async () => {
      const spy = jest.spyOn(usersRepository, 'getUserById').mockImplementation(async () => users[0]);
      expect((await usersService.getUserById(1)).id).toEqual(users[0].userid);
      spy.mockRestore();
    });

    it('should found a user by username', async () => {
      const spy = jest.spyOn(usersRepository, 'getUserByName').mockImplementation(async () => users[0]);
      expect((await usersService.getUserByName(users[0].username)).username).toEqual(users[0].username);
      spy.mockRestore();
    });

    it('should add a new user', async () => {
      const spy = jest.spyOn(usersRepository, 'newUser').mockImplementation(async () => users[0]);
      expect((await usersService.newUser(newUser)).username).toEqual(users[0].username);
      spy.mockRestore();
    });

    it('should update a user', async () => {
      const spy = jest.spyOn(usersRepository, 'updateUser').mockImplementation(async () => users[0]);
      expect((await usersService.updateUser(1, newUser)).username).toEqual(users[0].username);
      spy.mockRestore();
    });

    it('should delete a user', async () => {
      const spy = jest.spyOn(usersRepository, 'deleteUser').mockImplementation();
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      expect(await usersService.deleteUser(1)).toBe(undefined);
      spy.mockRestore();
    });
  });
});
