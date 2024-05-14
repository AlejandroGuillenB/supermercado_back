import { Test, type TestingModule } from '@nestjs/testing';
import { type CompraClienteEntity } from '../comprasClientes/compraCliente.entity';
import { CompraClienteMapper } from '../comprasClientes/compraCliente.mapper';
import { CompraClienteRepository } from '../comprasClientes/compraCliente.repository';
import { CompraClienteService } from '../comprasClientes/compraCliente.service';

describe('ComprasClientesService', () => {
  let compraClienteService: CompraClienteService;
  let compraClienteRepository: CompraClienteRepository;

  const comprasClientes: CompraClienteEntity[] = [
    {
      id: 1,
      id_venta: 1,
      id_cliente: 1,
    }
  ];

  const mockCompraClienteRepository = {
    getAllComprasClientes: () => comprasClientes,
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CompraClienteService, CompraClienteRepository, CompraClienteMapper]
    }).overrideProvider(CompraClienteRepository).useValue(mockCompraClienteRepository).compile();

    compraClienteService = app.get<CompraClienteService>(CompraClienteService);
    compraClienteRepository = app.get<CompraClienteRepository>(CompraClienteRepository);
  });

  describe('ComprasClientes', () => {
    it('should return an array of comrpas_cleintes', async () => {
      const spy = jest.spyOn(compraClienteRepository, 'getAllComprasClientes').mockImplementation(async () => comprasClientes);
      expect(await compraClienteService.getAllComprasClientes()).toEqual(comprasClientes);
      spy.mockRestore();
    });
  });
});
