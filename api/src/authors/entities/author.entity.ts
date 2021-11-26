import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from '../../users/entities/user.entity';
import Book from '../../books/entities/book.entity';

@Entity()
class Author {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public firstName: string;

  @Column({ nullable: true })
  public lastName: string;

  @Column({ nullable: true })
  public birthDate: string;

  @Column({ nullable: true })
  public countryOfBirth: string;

  @Column({ nullable: true })
  public description: string;

  @OneToMany(() => Book, (book: Book) => book.author)
  public books: Book[];

  @ManyToOne(() => User, (user: User) => user.authors)
  public user: User;
}

export default Author;
