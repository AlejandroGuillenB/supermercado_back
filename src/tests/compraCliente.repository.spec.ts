import { type TestingModule, Test } from '@nestjs/testing';
import { CompraClienteEntity } from '../comprasClientes/compraCliente.entity';
import { CompraClienteRepository } from '../comprasClientes/compraCliente.repository';
import { type Repository } from 'typeorm';
import { CompraClienteMapper } from '../comprasClientes/compraCliente.mapper';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ComprasClientesRepository', () => {
  let compraClienteRepository: CompraClienteRepository;
  let mockedRepository: jest.Mocked<Repository<CompraClienteEntity>>;

  const comprasClientes: CompraClienteEntity[] = [
    {
      id: 1,
      id_venta: 1,
      id_cliente: 1,
    }
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CompraClienteRepository, CompraClienteMapper, {
        provide: getRepositoryToken(CompraClienteEntity),
        useValue: { find: jest.fn() }
      }]
    }).compile();

    compraClienteRepository = app.get<CompraClienteRepository>(CompraClienteRepository);
    mockedRepository = app.get(getRepositoryToken(CompraClienteEntity));
  });

  describe('ComprasClientes', () => {
    it('should return an array of compras_clientes', async () => {
      mockedRepository.find.mockResolvedValueOnce(comprasClientes);
      const compras = await compraClienteRepository.getAllComprasClientes();
      expect(compras).toBe(comprasClientes);
    });
  });
});
