import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Book } from '../../entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService extends TypeOrmCrudService<Book> {
  constructor(@InjectRepository(Book) booksRepository: Repository<Book>) {
    super(booksRepository);
  }
}
