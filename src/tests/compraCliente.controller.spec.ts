import { Test, type TestingModule } from '@nestjs/testing';
import { CompraClienteController } from '../comprasClientes/compraCliente.controller';
import { type CompraClienteDTO } from '../comprasClientes/compraCliente.dto';
import { CompraClienteService } from '../comprasClientes/compraCliente.service';

describe('ClientesController', () => {
  let compraClienteController: CompraClienteController;
  let compraClienteService: CompraClienteService;
  const comprasClientes: CompraClienteDTO[] = [
    {
      id: 1,
      id_venta: 1,
      id_cliente: 1
    }
  ];
  const mockCompraClienteService = {
    getAllComprasClientes: () => comprasClientes,
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CompraClienteController],
      providers: [CompraClienteService]
    }).overrideProvider(CompraClienteService).useValue(mockCompraClienteService).compile();

    compraClienteController = app.get<CompraClienteController>(CompraClienteController);
    compraClienteService = app.get<CompraClienteService>(CompraClienteService);
  });

  describe('ComprasClientes', () => {
    it('should return an array of compras_clientes', async () => {
      const spy = jest.spyOn(compraClienteService, 'getAllComprasClientes').mockImplementation(async () => comprasClientes);
      expect(await compraClienteController.getAllComprasClientes()).toBe(comprasClientes);
      spy.mockRestore();
    });
  });
});
