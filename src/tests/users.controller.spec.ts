import { type TestingModule, Test } from '@nestjs/testing';
import { UsersController } from '../users/users.controller'
import { type UsersDTO } from '../users/users.dto'
import { UsersService } from '../users/users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
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
  ]
  const mockUsersService = {
    getAllUsers: () => users,
    getUserById: () => users[0],
    newUser: () => users[0],
    updateUser: () => users[0],
    deleteUser: () => { }
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).overrideProvider(UsersService).useValue(mockUsersService).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });

  describe('Users', () => {
    it('should return an array of users', async () => {
      const spy = jest.spyOn(usersService, 'getAllUsers').mockImplementation(async () => users)
      expect(await usersController.getAllUsers()).toBe(users)
      spy.mockRestore()
    });

    it('should return a user found by id', async () => {
      const spy = jest.spyOn(usersService, 'getUserById').mockImplementation(async () => users[0])
      expect(await usersController.getUserById(users[0])).toBe(users[0])
      spy.mockRestore()
    });

    it('should add new user', async () => {
      const spy = jest.spyOn(usersService, 'newUser').mockImplementation(async () => users[0])
      expect(await usersController.newUser(users[0])).toBe(users[0])
      spy.mockRestore()
    });

    it('should update a user', async () => {
      const spy = jest.spyOn(usersService, 'updateUser').mockImplementation(async () => users[0])
      expect(await usersController.updateUser(1, users[0])).toBe(users[0])
      spy.mockRestore()
    });

    it('should delete a user', async () => {
      const spy = jest.spyOn(usersService, 'deleteUser').mockImplementation();
      expect(await usersController.deleteUser(1)).toBe(undefined);
      spy.mockRestore();
    });
  });
});
