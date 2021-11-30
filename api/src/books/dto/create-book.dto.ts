import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  codeId: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  pagesCount: string;

  @IsNotEmpty()
  publicationDate: string;
}
