import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Author } from '../../authors/entities/author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  codeId: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  pagesCount: string;

  @Column({ nullable: true })
  publicationDate: string;

  @ManyToMany(() => Author, (author) => author.books)
  authors: Author[];
}
