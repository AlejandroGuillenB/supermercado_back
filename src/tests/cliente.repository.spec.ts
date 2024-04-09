import { Test, type TestingModule } from '@nestjs/testing'
import { ClientesRepository } from '../clientes/cliente.repository'
import { type ClienteEntity } from 'src/clientes/cliente.entity'

describe('ClienteRepository', () => {
  let clienteRepository: ClientesRepository

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

  const mockClienteRepository = {
    getAllClientes: () => result,
    getClienteById: () => result[0],
    addCliente: () => result[0],
    updateCliente: () => result[0]
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ClientesRepository]
    }).overrideProvider(ClientesRepository).useValue(mockClienteRepository).compile()

    clienteRepository = app.get<ClientesRepository>(ClientesRepository)
  })

  describe('Clientes', () => {
    it('should return a array of clientes', async () => {
      const spy = jest.spyOn(clienteRepository, 'getAllClientes').mockImplementation(async () => result)
      expect(await clienteRepository.getAllClientes()).toEqual(result)
      spy.mockRestore()
    })

    it('should return a cliente found by id', async () => {
      const spy = jest.spyOn(clienteRepository, 'getClienteById').mockImplementation(async () => result[0])
      expect(await clienteRepository.getClienteById(1)).toEqual(result[0])
      spy.mockRestore()
    })

    it('should add new cliente', async () => {
      const spy = jest.spyOn(clienteRepository, 'addCliente').mockImplementation(async () => result[0])
      expect(await clienteRepository.addCliente(result[0])).toEqual(result[0])
      spy.mockRestore()
    })

    it('should update a cliente', async () => {
      const spy = jest.spyOn(clienteRepository, 'updateCliente').mockImplementation(async () => result[0])
      expect(await clienteRepository.updateCliente(1, result[0])).toEqual(result[0])
      spy.mockRestore()
    })
  })
})
