import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from '../../users/entities/user.entity';
import Author from '../../authors/entities/author.entity';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public title: string;

  @Column({ nullable: true })
  public description: string;

  @Column({ nullable: true })
  public codeId: string;

  @Column({ nullable: true })
  public author: string;

  @Column({ nullable: true })
  public pagesCount: string;

  @Column({ nullable: true })
  public publicationDate: string;

  @ManyToOne(() => Author, (author: Author) => author.books)
  public authorInfo: Author;

  @ManyToOne(() => User, (user: User) => user.books)
  public user: User;
}

export default Book;
