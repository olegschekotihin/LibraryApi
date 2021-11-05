import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  pagesCount: string;

  @Column({ nullable: true })
  publicationDate: string;

  @Column({ nullable: true })
  authorId: string;
}
