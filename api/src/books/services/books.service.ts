import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import Book from '../entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../../users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(CreateBookDto: CreateBookDto) {
    const book = this.booksRepository.create(CreateBookDto);
    await this.booksRepository.save(book);

    return book;
  }

  async findAll() {
    return await this.booksRepository.find({ relations: ['authorInfo', 'user'] });
  }

  async findOne(id: number) {
    return await this.booksRepository.findOne(id);
  }

  async update(id: number, data: Partial<CreateBookDto>) {
    await this.booksRepository.update(id, data);

    const book = await this.booksRepository.findOne(id, {
      relations: ['authorInfo'],
    });
    if (book) {
      return book;
    }
  }

  async remove(id: number) {
    await this.booksRepository.delete(id);
    return { deleted: true };
  }
}
