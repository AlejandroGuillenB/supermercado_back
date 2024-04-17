import { type TestingModule, Test } from '@nestjs/testing';
import { UsersController } from '../users/users.controller';
import { type UsersDTO } from '../users/users.dto';
import { UsersService } from '../users/users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  const users: UsersDTO[] = [
    {
      id: 1,
      username: 'Juan',
      rol: 1,
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
    },
    {
      id: 2,
      username: 'Pedro',
      rol: 1,
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
    }
  ];
  const mockUsersService = {
    getAllUsers: () => users,
    getUserById: () => users[0],
    newUser: () => users[0],
    updateUser: () => users[0],
    deleteUser: () => { }
  };

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
      const spy = jest.spyOn(usersService, 'getAllUsers').mockImplementation(async () => users);
      expect(await usersController.getAllUsers()).toBe(users);
      spy.mockRestore();
    });

    it('should return a user found by id', async () => {
      const spy = jest.spyOn(usersService, 'getUserById').mockImplementation(async () => users[0]);
      expect(await usersController.getUserById(users[0])).toBe(users[0]);
      spy.mockRestore();
    });

    it('should add new user', async () => {
      const spy = jest.spyOn(usersService, 'newUser').mockImplementation(async () => users[0]);
      expect(await usersController.newUser(users[0])).toBe(users[0]);
      spy.mockRestore();
    });

    it('should update a user', async () => {
      const spy = jest.spyOn(usersService, 'updateUser').mockImplementation(async () => users[0]);
      expect(await usersController.updateUser(1, users[0])).toBe(users[0]);
      spy.mockRestore();
    });

    it('should delete a user', async () => {
      const spy = jest.spyOn(usersService, 'deleteUser').mockImplementation();
      expect(await usersController.deleteUser(1)).toBe(undefined);
      spy.mockRestore();
    });
  });
});
