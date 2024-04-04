import { Test, type TestingModule } from '@nestjs/testing'
import { ClientesController } from '../clientes/clientes.controller'
import { ClienteService } from '../clientes/clientes.service'
import { type ClienteDTO } from '../clientes/cliente.dto'

describe('ClientesController', () => {
  let clientesController: ClientesController
  let clienteService: ClienteService
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
  ]
  const mockClienteService = {
    getAllClientes: () => result
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [ClienteService]
    }).overrideProvider(ClienteService).useValue(mockClienteService).compile()

    clientesController = app.get<ClientesController>(ClientesController)
    clienteService = app.get<ClienteService>(ClienteService)
  })

  describe('getAllClientes', () => {
    it('should return an array of clientes', async () => {
      const spy = jest.spyOn(clienteService, 'getAllClientes').mockImplementation(async () => result)
      expect(await clientesController.getAllClientes()).toBe(result)
      spy.mockRestore()
    })
  })
})
