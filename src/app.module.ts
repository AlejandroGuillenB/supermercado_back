import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'database-1.c7awscq62bc7.us-east-2.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'admin123',
        database: 'db_supermercado',
        autoLoadEntities: true,
        synchronize: false,
        ssl: {
            rejectUnauthorized: false,
          },
      }),
      ClientesModule],
    controllers: [],
    providers: [],
})

export class AppModule { }