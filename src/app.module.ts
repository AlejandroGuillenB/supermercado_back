import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { CompraClienteModule } from './comprasClientes/compraCliente.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ClientesModule,
    AuthModule,
    UsersModule,
    EmpleadosModule,
    CompraClienteModule,
  ],
  controllers: [],
  providers: []
})

export class AppModule { }
