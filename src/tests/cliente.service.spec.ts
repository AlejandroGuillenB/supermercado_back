import { Test, type TestingModule } from '@nestjs/testing'
import { ClientesRepository } from '../clientes/cliente.repository'
import { ClienteService } from '../clientes/clientes.service'
import { ClienteMapper } from '../clientes/cliente.mapper'
import { type ClienteEntity } from '../clientes/cliente.entity'

describe('ClienteService', () => {
  let clienteService: ClienteService
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
      providers: [ClienteService, ClienteMapper, ClientesRepository]
    }).overrideProvider(ClientesRepository).useValue(mockClienteRepository).compile()

    clienteService = app.get<ClienteService>(ClienteService)
    clienteRepository = app.get<ClientesRepository>(ClientesRepository)
  })

  describe('Clientes', () => {
    it('should return a array of clientes', async () => {
      const spy = jest.spyOn(clienteRepository, 'getAllClientes').mockImplementation(async () => result)
      expect(await clienteService.getAllClientes()).toEqual(result)
      spy.mockRestore()
    })
  })
})
