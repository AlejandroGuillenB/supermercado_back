import { ClientesRepository } from '../clientes/cliente.repository'
import { ClienteEntity } from '../clientes/cliente.entity'
import { Test, type TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { ClienteMapper } from '../clientes/cliente.mapper'
import { UpdateResult, type Repository } from 'typeorm'

describe('ClienteRepository', () => {
  let clientesRepository: ClientesRepository
  let mockedRepository: jest.Mocked<Repository<ClienteEntity>>

  const result: ClienteEntity[] = [
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
  ]

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ClientesRepository, ClienteMapper, {
        provide: getRepositoryToken(ClienteEntity),
        useValue: { find: jest.fn(), findOneOrFail: jest.fn(), save: jest.fn(), update: jest.fn() }
      }]
    }).compile()

    clientesRepository = app.get<ClientesRepository>(ClientesRepository)
    mockedRepository = app.get(getRepositoryToken(ClienteEntity))
  })

  describe('Clientes', () => {
    it('should return a array of clientes', async () => {
      mockedRepository.find.mockResolvedValueOnce(result)
      const clientes = await clientesRepository.getAllClientes()
      expect(clientes).toBeDefined()
    })

    it('should return a cliente found by id', async () => {
      mockedRepository.findOneOrFail.mockResolvedValueOnce(result[0])
      const cliente = await clientesRepository.getClienteById(1)
      expect(cliente).toBeDefined()
    })

    it('should add new cliente', async () => {
      mockedRepository.save.mockResolvedValueOnce(result[0])
      const cliente = await clientesRepository.addCliente(result[0])
      expect(cliente).toBeDefined()
    })

    it('should update a cliente', async () => {
      mockedRepository.update.mockResolvedValueOnce(new UpdateResult())
      const cliente = await clientesRepository.updateCliente(1, result[0])
      expect(cliente).toBeDefined()
    })
  })
})
