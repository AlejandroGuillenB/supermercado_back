import { Test, type TestingModule } from '@nestjs/testing';
import { EmpleadosController } from '../empleados/empleados.controller';
import { EmpleadosService } from '../empleados/empleados.service';
import { type EmpleadosDTO } from '../empleados/empleados.dto';

describe('EmpleadosController', () => {
  let empleadosController: EmpleadosController;
  let empleadosService: EmpleadosService;
  const result: EmpleadosDTO[] = [
    {
      id: 1,
      nombre: 'Macarena',
      apellido: 'Gutierrez',
      edad: 32,
      fecha_nac: new Date('1989-04-06T05:00:00.000Z'),
      tipo_doc: 'DNI',
      nro_doc: '334565243',
      cuil: '12-334565243-7',
      direccion: 'Av. Gaona 352',
      nro_tel_princ: '1164575222',
      nro_tel_sec: '1164575222',
      email: 'maca.gutieerez756@hotmail.com',
      cargo: 'Cajera',
      antiguedad: '2 años',
      fecha_ingreso: new Date('2019-03-01T05:00:00.000Z'),
      salario_anual: 45000
    },
    {
      id: 2,
      nombre: 'Damian',
      apellido: 'Gutierrez',
      edad: 39,
      fecha_nac: new Date('1978-09-14T05:00:00.000Z'),
      tipo_doc: 'DNI',
      nro_doc: '33869556',
      cuil: '20-33869556-3',
      direccion: 'Av Alberdi 05',
      nro_tel_princ: '+5491176844456',
      nro_tel_sec: '+5491157684445',
      email: 'damian_gut.756@gmail.com',
      cargo: 'Cajero',
      antiguedad: '3 años y 6 meses',
      fecha_ingreso: new Date('2018-03-04T05:00:00.000Z'),
      salario_anual: 65000
    }
  ];
  const mockEmpleadosService = {
    getAllEmpleados: () => result,
    getEmpleadoById: () => result[0],
    addEmpleado: () => result[0],
    updateEmpleado: () => result[0]
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmpleadosController],
      providers: [EmpleadosService]
    }).overrideProvider(EmpleadosService).useValue(mockEmpleadosService).compile();

    empleadosController = app.get<EmpleadosController>(EmpleadosController);
    empleadosService = app.get<EmpleadosService>(EmpleadosService);
  });

  describe('Empleados', () => {
    it('should return an array of empleados', async () => {
      const spy = jest.spyOn(empleadosService, 'getAllEmpleados').mockImplementation(async () => result);
      expect(await empleadosController.getAllEmpleados()).toBe(result);
      spy.mockRestore();
    });

    it('should return a empleado found by id', async () => {
      const spy = jest.spyOn(empleadosService, 'getEmpleadoById').mockImplementation(async () => result[0]);
      expect(await empleadosController.getEmpleadoById(1)).toBe(result[0]);
      spy.mockRestore();
    });

    it('should add new empleado', async () => {
      const spy = jest.spyOn(empleadosService, 'addEmpleado').mockImplementation(async () => result[0]);
      expect(await empleadosController.addEmpleado(result[0])).toBe(result[0]);
      spy.mockRestore();
    });

    it('should update a empleado', async () => {
      const spy = jest.spyOn(empleadosService, 'updateEmpleado').mockImplementation(async () => result[0]);
      expect(await empleadosController.updateEmpleado(1, result[0])).toBe(result[0]);
      spy.mockRestore();
    });
  });
});
