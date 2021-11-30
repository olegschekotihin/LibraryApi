import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../dto/create-author.dto';
import Author from '../entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import Book from '../../books/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async create(CreateAuthorDto: CreateAuthorDto) {
    const author = this.authorsRepository.create(CreateAuthorDto);
    await this.authorsRepository.save(author);

    return author;
  }

  async findAll() {
    return await this.authorsRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    return await this.authorsRepository.findOne(id);
  }

  async getAllBooks() {
    return this.authorsRepository.find({ relations: ['books'] });
  }

  async getBookById(id: number) {
    const book = await this.authorsRepository.findOne(id, {
      relations: ['author'],
    });
    if (book) {
      return book;
    }
  }

  async update(id: number, data: Partial<CreateAuthorDto>) {
    await this.authorsRepository.update(id, data);

    const author = await this.authorsRepository.findOne(id, {
      relations: ['books'],
    });
    if (author) {
      return author;
    }
  }

  async remove(id: number) {
    await this.authorsRepository.delete(id);
    return { deleted: true };
  }
}
