import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Author } from '../../entities/author.entity';
import { AuthorsService } from '../../services/authors/authors.service';

@Crud({
  model: {
    type: Author,
  },
})
@Controller('authors')
export class AuthorsController implements CrudController<Author> {
  constructor(public service: AuthorsService) {}
}
