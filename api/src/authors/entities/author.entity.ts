import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  birthDate: string;

  @Column({ nullable: true })
  countryOfBirth: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => Book, (book) => book.authors)
  @JoinTable()
  books: Book[];
}
