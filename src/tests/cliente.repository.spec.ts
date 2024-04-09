import { ClientesRepository } from '../clientes/cliente.repository'
import { ClienteEntity } from '../clientes/cliente.entity'
import { Test, type TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { ClienteMapper } from '../clientes/cliente.mapper'

describe('ClienteRepository', () => {
  let clientesRepository: ClientesRepository

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ClientesRepository, ClienteMapper, {
        provide: getRepositoryToken(ClienteEntity),
        useValue: { find: jest.fn(), findOneOrFail: jest.fn(), save: jest.fn(), update: jest.fn() }
      }]
    }).compile()

    clientesRepository = app.get<ClientesRepository>(ClientesRepository)
  })

  describe('Clientes', () => {
    it('should return a array of clientes', async () => {
      const spy = jest.spyOn(clientesRepository, 'getAllClientes')
      expect(typeof clientesRepository.getAllClientes).toBe('function')
      spy.mockRestore()
    })

    it('should return a cliente found by id', async () => {
      const spy = jest.spyOn(clientesRepository, 'getClienteById')
      expect(typeof clientesRepository.getClienteById).toBe('function')
      spy.mockRestore()
    })

    it('should add new cliente', async () => {
      const spy = jest.spyOn(clientesRepository, 'addCliente')
      expect(typeof clientesRepository.addCliente).toBe('function')
      spy.mockRestore()
    })

    it('should update a cliente', async () => {
      const spy = jest.spyOn(clientesRepository, 'updateCliente')
      expect(typeof clientesRepository.updateCliente).toBe('function')
      spy.mockRestore()
    })
  })
})
