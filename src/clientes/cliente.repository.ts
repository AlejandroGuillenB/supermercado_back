import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { ClienteMapper } from './cliente.mapper';

@Injectable()
export class ClientesRepository {
    constructor(
        @InjectRepository(ClienteEntity)
        private clientesRepository: Repository<ClienteEntity>,
        private mapper: ClienteMapper
    ) { }

    getAllClientes(): Promise<ClienteEntity[]> {
        return this.clientesRepository.find();
    }
}