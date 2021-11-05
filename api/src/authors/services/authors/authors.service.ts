import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Author } from '../../entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService extends TypeOrmCrudService<Author> {
  constructor(@InjectRepository(Author) usersRepository: Repository<Author>) {
    super(usersRepository);
  }
}
