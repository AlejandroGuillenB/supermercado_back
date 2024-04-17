import { Test, type TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmpleadosRepository } from '../empleados/empleados.repository';
import { type Repository } from 'typeorm';
import { EmpleadosEntity } from '../empleados/empleados.entity';
import { EmpleadosMapper } from '../empleados/empleados.mapper';

describe('EmpleadosRepository', () => {
  let empleadosRepository: EmpleadosRepository;
  let mockedRepository: jest.Mocked<Repository<EmpleadosEntity>>;

  const result: EmpleadosEntity[] = [
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

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [EmpleadosRepository, EmpleadosMapper, {
        provide: getRepositoryToken(EmpleadosEntity),
        useValue: { find: jest.fn(), findOneOrFail: jest.fn(), save: jest.fn(), update: jest.fn() }
      }]
    }).compile();

    empleadosRepository = app.get<EmpleadosRepository>(EmpleadosRepository);
    mockedRepository = app.get(getRepositoryToken(EmpleadosEntity));
  });

  describe('Empleados', () => {
    it('should return a array of empleados', async () => {
      mockedRepository.find.mockResolvedValueOnce(result);
      const clientes = await empleadosRepository.getAllEmpleados();
      expect(clientes).toBe(result);
    });

    it('should return a empleado found by id', async () => {
      mockedRepository.findOneOrFail.mockResolvedValueOnce(result[0]);
      const cliente = await empleadosRepository.getEmpleadoById(1);
      expect(cliente).toBe(result[0]);
    });

    it('should add new empleado', async () => {
      mockedRepository.save.mockResolvedValueOnce(result[0]);
      const cliente = await empleadosRepository.addEmpleado(result[0]);
      expect(cliente).toBe(result[0]);
    });
  });
});
