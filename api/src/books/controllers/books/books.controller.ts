import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Book } from '../../entities/book.entity';
import { BooksService } from '../../services/books/books.service';

@Crud({
  model: {
    type: Book,
  },
})
@Controller('books')
export class BooksController implements CrudController<Book> {
  constructor(public service: BooksService) {}
}
