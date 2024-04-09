import { ClientesRepository } from '../clientes/cliente.repository'
import { type ClienteEntity } from '../clientes/cliente.entity'
import { Test, type TestingModule } from '@nestjs/testing'

describe('ClienteRepository', () => {
  let clientesRepository: ClientesRepository

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

  const mockClientesRepository = {
    getAllClientes: () => result,
    getClienteById: () => result[0],
    addCliente: () => result[0],
    updateCliente: () => result[0]
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ClientesRepository]
    }).overrideProvider(ClientesRepository).useValue(mockClientesRepository).compile()

    clientesRepository = app.get<ClientesRepository>(ClientesRepository)
  })

  describe('Clientes', () => {
    it('should return a array of clientes', async () => {
      const spy = jest.spyOn(clientesRepository, 'getAllClientes').mockResolvedValue(result)
      const clientes = await clientesRepository.getAllClientes()
      expect(clientes).toEqual(result)
      spy.mockRestore()
    })

    it('should return a cliente found by id', async () => {
      const spy = jest.spyOn(clientesRepository, 'getClienteById').mockResolvedValue(result[0])
      const cliente = await clientesRepository.getClienteById(1)
      expect(cliente).toEqual(result[0])
      spy.mockRestore()
    })

    it('should add new cliente', async () => {
      const spy = jest.spyOn(clientesRepository, 'addCliente').mockResolvedValue(result[0])
      const cliente = await clientesRepository.addCliente(result[0])
      expect(cliente).toEqual(result[0])
      spy.mockRestore()
    })

    it('should update a cliente', async () => {
      const spy = jest.spyOn(clientesRepository, 'updateCliente').mockResolvedValue(result[0])
      const cliente = await clientesRepository.updateCliente(1, result[0])
      expect(cliente).toEqual(result[0])
      spy.mockRestore()
    })
  })
})
