import { Test, type TestingModule } from '@nestjs/testing';
import { ClientesController } from '../clientes/clientes.controller';
import { ClienteService } from '../clientes/clientes.service';
import { type ClienteDTO } from '../clientes/cliente.dto';

describe('ClientesController', () => {
  let clientesController: ClientesController;
  let clienteService: ClienteService;
  const result: ClienteDTO[] = [
    {
      id: 1,
      nombre: 'Martin',
      apellido: 'Gutierrez',
      tipo_doc: 'DNI',
      nro_doc: '4598676890',
      nro_tel_princ: '+549116574839',
      nro_tel_sec: '-',
      email: 'martin.gutierrez@gmail.com'
    }
  ];
  const mockClienteService = {
    getAllClientes: () => result,
    getClienteById: () => result[0],
    addCliente: () => result[0],
    updateCliente: () => result[0]
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [ClienteService]
    }).overrideProvider(ClienteService).useValue(mockClienteService).compile();

    clientesController = app.get<ClientesController>(ClientesController);
    clienteService = app.get<ClienteService>(ClienteService);
  });

  describe('Clientes', () => {
    it('should return an array of clientes', async () => {
      const spy = jest.spyOn(clienteService, 'getAllClientes').mockImplementation(async () => result);
      expect(await clientesController.getAllClientes()).toBe(result);
      spy.mockRestore();
    });

    it('should return a cliente found by id', async () => {
      const spy = jest.spyOn(clienteService, 'getClienteById').mockImplementation(async () => result[0]);
      expect(await clientesController.getClienteById(1)).toBe(result[0]);
      spy.mockRestore();
    });

    it('should add new cliente', async () => {
      const spy = jest.spyOn(clienteService, 'addCliente').mockImplementation(async () => result[0]);
      expect(await clientesController.addCliente(result[0])).toBe(result[0]);
      spy.mockRestore();
    });

    it('should update a cliente', async () => {
      const spy = jest.spyOn(clienteService, 'updateCliente').mockImplementation(async () => result[0]);
      expect(await clientesController.updateCliente(1, result[0])).toBe(result[0]);
      spy.mockRestore();
    });
  });
});
